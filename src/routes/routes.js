import combineRouters from 'koa-combine-routers';
import aRouter from './aRouter';
import bRouter from './bRouter';
import demoRouter from './demoRouter';
import loginRouter from './loginRouter'


const router = combineRouters(
  aRouter,
  bRouter,
  demoRouter,
  loginRouter
);

export default router;