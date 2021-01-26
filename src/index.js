import koa from 'koa'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'
import path from 'path'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'
import JWT from 'koa-jwt'
import config from './config/index'
import errorHandle from './common/ErrorHandle'

const app = new koa();

// 判断执行环境
const isProdMode = process.env.NODE_ENV === 'production' ? true : false;

// 定义公共路径，不需要jwt鉴权
const jwt = JWT({
  secret: config.JWT_SECRET
}).unless({
  path: [/^\/public/]
});

const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../publich')),
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet(),
  errorHandle,
  jwt
]);

if (isProdMode) {
  app.use(compress());
}

app.use(middleware);
app.use(router());

app.listen(3000);