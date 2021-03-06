const { forwardTo } = require('prisma-binding');

const Query = {
  me(_parent, _args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }

    return ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId
        }
      },
      info
    );
  },

  photos: forwardTo('db'),
  photosConnection: forwardTo('db')
};

module.exports = Query;
