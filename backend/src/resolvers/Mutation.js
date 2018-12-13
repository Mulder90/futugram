const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PASSWORD_SALT_LENGTH, COOKIE_MAX_AGE } = require('../config');

const Mutations = {
  async signup(_parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    const password = await bcryptjs.hash(args.password, PASSWORD_SALT_LENGTH);
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password
        }
      },
      info
    );

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: COOKIE_MAX_AGE
    });

    return user;
  },

  async signin(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({
      where: {
        email
      }
    });

    if (!user) {
      throw new Error(`No user found for email: ${email}.`);
    }

    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password.');
    }

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: COOKIE_MAX_AGE
    });

    return user;
  },

  signout(_parent, _args, ctx, _info) {
    ctx.response.clearCookie('token');

    return {
      message: 'Successfully logging out.'
    };
  },

  async uploadPhoto(_parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be logged in to upload a photo.');
    }

    const photo = await ctx.db.mutation.createPhoto(
      {
        data: {
          user: {
            connect: {
              id: ctx.request.userId
            }
          },
          ...args
        }
      },
      info
    );

    return photo;
  }
};

module.exports = Mutations;
