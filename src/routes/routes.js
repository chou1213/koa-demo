import combineRouters from 'koa-combine-routers';
import aRouter from './aRouter';
import bRouter from './bRouter';
import publicRouter from './publicRouter';
import loginRouter from './loginRouter'


const router = combineRouters(
  aRouter,
  bRouter,
  publicRouter,
  loginRouter
);

export default router;