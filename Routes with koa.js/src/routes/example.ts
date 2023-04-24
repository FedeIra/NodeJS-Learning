import { Context } from 'koa';
import Router from 'koa-router';

const router = new Router();

router.post('/ejemplo', async (ctx: Context) => {
  try {
    const requestBody = ctx.request.body;
    console.log(requestBody);
    // hacer algo con el cuerpo de la solicitud
    ctx.status = 200;
    ctx.body = 'Solicitud recibida con éxito';
  } catch (error) {
    console.log(error);
  }
});

router.post('/ejemplo2', async (ctx: Context) => {
  try {
    const requestBody = ctx.request.body;
    console.log(requestBody);
    // hacer algo con el cuerpo de la solicitud
    ctx.status = 200;
    ctx.body = 'Solicitud recibida con éxito';
  } catch (error) {
    console.log(error);
  }
});

export default router;
