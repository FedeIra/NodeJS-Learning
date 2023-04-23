import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import logger from 'koa-logger';
import healthCheckRoutes from './routes/healthcheck';
import codereviewvideosRouter from './routes/coderreviewvideos';
import { config } from './config';

const app = new Koa();
const PORT = config.port;

app.use(bodyParser());
app.use(
  cors({
    origin: '*'
  })
);
app.use(logger());

app.use(healthCheckRoutes.routes()); //? It will use all the routes defined in  healthCheckRoutes.

app.use(codereviewvideosRouter.routes());

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on('error', err => {
    console.error(err);
  });

export default server;
