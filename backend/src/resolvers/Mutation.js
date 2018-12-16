const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  PASSWORD_SALT_LENGTH,
  COOKIE_MAX_AGE,
  PASSWORD_MIN_LENGTH
} = require('../config');
const geocoder = require('../utils/geocoder');

const Mutations = {
  async signup(_parent, args, ctx, info) {
    const { email, name, password } = args;
    args.email = email.toLowerCase();

    if (email === '' || name === '' || password === '') {
      throw new Error('Fields cannot be empty');
    }

    if (password.length < PASSWORD_MIN_LENGTH) {
      throw new Error(
        `Please provide a password with a length of at least ${PASSWORD_MIN_LENGTH}`
      );
    }

    const saltedPassword = await bcryptjs.hash(password, PASSWORD_SALT_LENGTH);

    try {
      const user = await ctx.db.mutation.createUser(
        {
          data: {
            ...args,
            password: saltedPassword
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
    } catch (error) {
      throw new Error(`${email} is already used. Please try a different one.`);
    }
  },

  async signin(parent, { email, password }, ctx, info) {
    if (email === '' || password === '') {
      throw new Error('Fields cannot be empty');
    }

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
    const location = args.location || '';
    let latitude = 0.0;
    let longitude = 0.0;

    if (!ctx.request.userId) {
      throw new Error('You must be logged in to upload a photo.');
    }

    let data = {
      user: {
        connect: {
          id: ctx.request.userId
        }
      },
      image: args.image
    };

    if (location) {
      const locationInfo = await geocoder.geocode(location);
      if (locationInfo.length > 0) {
        if (locationInfo[0].latitude) {
          latitude = locationInfo[0].latitude;
        }

        if (locationInfo[0].longitude) {
          longitude = locationInfo[0].longitude;
        }

        data = Object.assign(data, {
          location: {
            create: {
              city: location,
              latitude: latitude,
              longitude: longitude
            }
          }
        });
      }
    }

    const photo = await ctx.db.mutation.createPhoto({ data: data }, info);

    return photo;
  }
};

module.exports = Mutations;
