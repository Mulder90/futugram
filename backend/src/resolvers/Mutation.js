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
      // Deny cookies access from js
      httpOnly: true,
      maxAge: COOKIE_MAX_AGE
    });

    return user;
  }
};

module.exports = Mutations;
