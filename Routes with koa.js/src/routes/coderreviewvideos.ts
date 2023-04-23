import { Context } from 'koa';
import Router from 'koa-router';

const codereviewvideosRouter = new Router();

codereviewvideosRouter.post(`/codereviewvideos`, async (ctx: Context) => {
  try {
    console.log(ctx.request);

    ctx.status = 201;
    ctx.body = {
      games: ['World of Warships']
    };
  } catch (err) {
    console.error(err);
  }
});

export default codereviewvideosRouter;
