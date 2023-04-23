import Router from 'koa-router';
const healthCheckRoutes = new Router();

healthCheckRoutes.get('/ping', async ctx => {
  //! ctx: Context of koa router. It contains request and response objects.
  try {
    ctx.body = {
      status: 'success',
      data: 'Hello World!'
    };
  } catch (error) {
    console.log(error);
  }
});

export default healthCheckRoutes;
