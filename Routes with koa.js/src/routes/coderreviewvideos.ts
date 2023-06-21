import { Context } from 'koa';
import Router from 'koa-router';

import { AddGameRequest } from '../request/AddGameRequest';
import { validate } from 'class-validator';
import { log } from 'util';

const codereviewvideosRouter = new Router();

codereviewvideosRouter.post(`/codereviewvideos`, async (ctx: Context) => {
  try {
    const validatorOptions = {};

    const game = new AddGameRequest();
    game.name = ctx.request.body.name || '';

    const errors = await validate(game, validatorOptions);

    if (errors.length > 0) {
      ctx.status = 400;
      ctx.body = {
        status: 'error',

        data: errors
      };

      return ctx;
    }

    ctx.status = 201;
    ctx.body = {
      status: 'success',
      data: game.name
    };
  } catch (err) {
    console.error(err);
  }
});

export default codereviewvideosRouter;

// CTX:
// {
//   request: {
//     method: 'POST',
//     url: '/codereviewvideos',
//     header: {
//       'user-agent': 'PostmanRuntime/7.32.2',
//       accept: '*/*',
//       'postman-token': '7a722726-18a5-4ca1-a5d5-d21f98cb00cc',
//       host: '0.0.0.0:7654',
//       'accept-encoding': 'gzip, deflate, br',
//       connection: 'keep-alive',
//       'content-length': '0'
//     }
//   },
//   response: {
//     status: 404,
//     message: 'Not Found',
//     header: [Object: null prototype] {
//       vary: 'Origin',
//       'access-control-allow-origin': '*'
//     }
//   },
//   app: { subdomainOffset: 2, proxy: false, env: 'development' },
//   originalUrl: '/codereviewvideos',
//   req: '<original node req>',
//   res: '<original node res>',
//   socket: '<original node socket>'
// }

// import { Context } from 'koa';
// import Router from 'koa-router';

// import { AddGameRequest } from '../request/AddGameRequest';
// import { validate } from 'class-validator';

// const codereviewvideosRouter = new Router();

// codereviewvideosRouter.post(`/codereviewvideos`, async (ctx: Context) => {
//   try {
//     const validatorOptions = {};

//     const addGameRequest = new AddGameRequest();
//     addGameRequest.name = 'World of Warcraft';

//     const errors = await validate(addGameRequest, validatorOptions);

//     if (errors.length > 0) {
//       ctx.status = 400;
//       ctx.body = { status: 'error', data: errors };
//       return ctx;
//     }

//     ctx.body = { status: 'success', data: addGameRequest.name };
//     console.log(`REQUEST: ${JSON.stringify(ctx.request)}`);
//     console.log(`RESPONSE: ${JSON.stringify(ctx.response)}`);
//   } catch (err) {
//     console.error(err);
//   }
// });

// export default codereviewvideosRouter;
