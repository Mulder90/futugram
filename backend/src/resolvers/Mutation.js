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
  }
};

module.exports = Mutations;
