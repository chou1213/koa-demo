
## koa工作原理
> 洋葱模型，执行的顺序：顺序执行，回调的顺序：方向执行，先进后出。

## hello world
#### 创建文件夹
```base
mkdir koa-api
cd koa-api
```

#### 创建package.json
```
npm init -y
```

#### 安装koa
```
npm i -S koa
```

#### 在根目录创建index.js, 写一个hello world
```js
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    // 看看都打印了什么
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = 'hello world';
});

app.listen(3000);
```

#### 运行koa服务
```
node ./index.js
```

## koa-router中间件
> 提供路由功能，访问不同的路由，执行不同方法，返回不同内容。

#### 安装koa-router
```base
npm i -S koa-router
```

#### 引用koa-router，修改index.js
```js
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    // 看看都打印了什么
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = 'hello world';
})

router.get('/api', ctx => {
    // 看看都打印了什么
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = 'hello api';
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
```

## 写一个中间件，修改index.js
```js
const Koa = require('koa');
const app = new Koa();

const middleware = function async(ctx, next) {
  console.log('这是一个中间件');
  console.log(ctx.request.path);
  // next();
}

const middleware1 = function async(ctx, next) {
  console.log('这是一个中间件1');
  console.log(ctx.request.path);
  next();
  console.log('这是一个中间件1 end');
}

const middleware2 = function async(ctx, next) {
  console.log('这是一个中间件2');
  console.log(ctx.request.path);
  next();
  console.log('这是一个中间件2 end');
}

// 看看打印了什么
app.use(middleware1);
app.use(middleware2);
app.use(middleware);

app.listen(3000);

/* 这是一个中间件1
/
这是一个中间件2
/
这是一个中间件
/
这是一个中间件2 end
这是一个中间件1 end */
```

## koa-body @koa/cors中间件

#### 安装koa-body @koa/cors
```bash
npm i -S koa-body @koa/cors
```

#### 引用koa-body @koa/cors, 修改index.js
```js
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();

// 定义路由前缀
router.prefix('/api');

router.get('/', ctx => {
  // 看看都打印了什么
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = 'hello world';
})

// 获取get方法的参数
router.get('/api', ctx => {
  const params = ctx.request.query;
  // 看看都打印了什么
  console.log(params);
  ctx.body = {
    username: params.username,
    age: params.age
  };
})

// 通过postman，测试该接口
router.post('/post', async ctx => {
  let { body } = ctx.request;
  // 看看打印了什么
  console.log(body);
  console.log(ctx.request);
  ctx.body = {
    ...body
  }
})

app.use(koaBody());
app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
```

## koa-combine-routers中间件
> 合并路由

#### 安装koa-combine-routers
```base
npm i koa-combine-routers -S
```

#### 划分目录结构
```js
.
├── package.json
├── src 
│   ├── api 
│   │    ├── a.js
│   │    └── b.js
│   ├── routes 
│   │    ├── aRouter.js
│   │    ├── bRouter.js
│   │    └── routes.js
│   └── index.js
│    
.
```

#### 引入koa-combine-routers
```js
// a.js
module.exports = (ctx) => {
  ctx.body = {
    message: 'from a'
  };
}

// b.js
module.exports = ctx => {
  ctx.body = {
    message: 'from b'
  };
}

// aRouter.js
const Router = require('koa-router');
const router = new Router();
const a = require('../api/a');
router.get('/a', a)

module.exports = router;

// bRouter.js
const Router = require('koa-router');
const router = new Router();
const b = require('../api/b');
router.get('/b', b)

module.exports = router;

// routes.js
const combineRouters = require('koa-combine-routers');
const aRouter = require('./aRouter');
const bRouter = require('./bRouter');

const router = combineRouters(
  aRouter,
  bRouter
);

module.exports = router

// index.js
const Koa = require('koa');
const app = new Koa();
const router = require('./routes/routes');
 
app.use(router());

app.listen(3000);
```

## koa-helmet中间件
> 提供安全的头部信息

#### 安装koa-helmet
```base
npm i -S koa-helmet
```
#### 引入koa-helmet, 修改index.js
```js
const Koa = require('koa');
const app = new Koa();
const helmet = require("koa-helmet");
const router = require('./routes/routes');
 
app.use(helmet());
app.use(router());

app.listen(3000);
```

## koa-static中间件

#### 安装koa-static
```base
npm i -S koa-static
```

#### 在public目录下放置logo.png，通过localhost:3000/logo.png访问
```js
.
├── package.json
├── public
│   └── logo.png
├── src 
│   ├── api 
│   │    ├── a.js
│   │    └── b.js
│   ├── routes 
│   │    ├── aRouter.js
│   │    ├── bRouter.js
│   │    └── routes.js
│   └── index.js
│    
.
```

#### 引入koa-static，修改index.js
```js
const Koa = require('koa');
const app = new Koa();
const helmet = require("koa-helmet");
const statics = require("koa-static");
const router = require('./routes/routes');
const path = require('path');
 
app.use(helmet());
app.use(statics(path.join(__dirname, '../publich')));
app.use(router());

app.listen(3000);
```

## nodemon开发热加载
> 监听文件被修改，自动重启服务

#### 安装nodemon
```bash
npm i -D nodemon
```

#### 使用nodemon自动重启服务，修改package.json添加start命令
```json
"start": "nodemon src/index.js"
```

#### 执行npm start命令
> 可以开启热加载开发


## webpack配置
> 可以在开发的时候使用es6语法

#### 安装webpack
```bash
npm i -D webpack webpack-cli clean-webpack-plugin webpack-node-externals @babel/core @babel/node @babel/preset-env babel-loader cross-env
```

#### 在目录添加webpack.config.js，目录结构
```js
.
├── package.json
├── webpack.config.js
├── src 
│   ├── api 
│   │    ├── a.js
│   │    └── b.js
│   ├── routes 
│   │    ├── aRouter.js
│   │    ├── bRouter.js
│   │    └── routes.js
│   └── index.js
│    
.
```

#### 配置webpack.config.js
```js
const path = require('path');
const nodeExcternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackconfig = {
  target: 'node',
  mode: 'development',
  entry: {
    server: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin()
  ],
  node: {
    global: true,
    __filename: true,
    __dirname: true
  }
};

module.exports = webpackconfig;
```

#### 用es6改写src/index.js
```js
import koa from 'koa'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'
import path from 'path'

const app = new koa();

app.use(helmet());
app.use(statics(path.join(__dirname, '../publich')));
app.use(router());

app.listen(3000);
```

#### 执行npx webpack, 打包node文件
> 发现根目录多了dist/server.bundle.js, 输出es6语法被打包后的资源文件

#### 打包后的目录结构
```js
.
├── package.json
├── webpack.config.js
├── dist 
│   └── server.bundle.js
├── src 
│   ├── api 
│   │    ├── a.js
│   │    └── b.js
│   ├── routes 
│   │    ├── aRouter.js
│   │    ├── bRouter.js
│   │    └── routes.js
│   └── index.js
│    
.
```

#### 尝试node src/index
> 发现运行不起来，因为使用了es6语法

#### 尝试用npx babel-node src/index.js
> 可以支持执行es6语法，跑起node服务

#### 尝试执行npx nodemon --exce babel-node src/index.js
> 可以使用es6语法，进行热开发

#### 以上命令，整合到package.json start命令
```json
"start": "nodemon --exec babel-node src/index.js"
```

## 通过命令和chrome工具调试webpack.config.js
> 可以方便我们调试webpack.config.js是否符合我们的配置

#### 执行npx node --inspect-brk ./node_modules/.bin/webpack --config （webpack配置目录）
> 可以通过--config参数配置webpack配置文件的目录，一般配置文件都在根目录可以不设置

#### 执行npx node --inspect-brk ./node_modules/.bin/webpack --progress
> 可以打开chrome, 访问chrome://inspect/，点击inspect就可以打开chrome调试工具。可以在调试工具加断点调试。

#### 可以把调试命令整合到package.json中
```json
"webpack:debug": "node --inspect-brk ./node_modules/.bin/webpack --progress"
```

#### 可以执行npm run webpack:debugger调试webpack

## 优化webpack配置，可以用于生产环境
> webpack配置需要区分开发和生产环境

#### 目录结构，如下增加了config目录
```js
.
├── package.json
├── config
│   ├── utils.js
│   ├── webpack.config.base.js 
│   ├── webpack.config.dev.js  
│   └── webpack.config.prod.js 
├── dist 
│   └── server.bundle.js
├── src 
│   ├── api 
│   │    ├── a.js
│   │    └── b.js
│   ├── routes 
│   │    ├── aRouter.js
│   │    ├── bRouter.js
│   │    └── routes.js
│   └── index.js
│    
.
```

#### config文件夹下的配置
> dev和prod需要合并base配置文件，可以是用webpack-merge。prod脚本需要压缩js，可以使用terser-webpack-plugin

```js
//utils.js 配置entry和dist路径
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

exports.resolve = resolve;
exports.APP_PATH = resolve('src');
exports.DIST_PATH = resolve('dist');

// webpack.config.base.js
const path = require('path');
const webpack = require('webpack');
const nodeExcternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackconfig = {
  target: 'node',
  mode: 'development',
  entry: {
    server: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({  // webpack打包是定义全局常量
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV === 'production' ? "'production'" : "'developmennt'")
      }
    })
  ],
  node: {
    global: true,
    __filename: true,
    __dirname: true
  }
};

module.exports = webpackconfig;

// webpack.config.dev.js
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const webpackconfig = require('./webpack.config.base');
const baseWebpackConfig = require('./webpack.config.base');
const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: {
    children: false
  }
});

module.exports = webpackConfig;


//webpack.config.prod.js 
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const TerserWebpackPlugin = require('terser-webpack-plugin'); // 压缩js代码

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  stats: {
    children: false,
    warnings: false
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            drop_console: false, // 是否注释掉console
            dead_code: true,
            drop_debugger: true
          },
          output: {
            comments: false,
            beautify: false
          },
          mangle: true
        },
        parallel: true
      })
    ],
    splitChunks: { // 提取重复的文件
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
});

module.exports = webpackConfig;
```

#### 修改package.json添加build命令
> 需要安装cross-env设置执行环境的全局变量，npm i -D cross-env， 执行npm run build发现，根目录多了dist/server.bundle.js
```json
"build": "cross-env NODE_ENV=production webpack --config config/webpack.config.prod.js"s
```

#### 安装rimraf命令，删除dist目录
```bash
npm i -D rimraf
```

#### 修改package.json，添加clean命令
```json
"clean": "rimraf dist"
```

#### 修改package.json，添加dev命令
> 开发环境，跑koa项目，babel-node --inspect开启chrome调试工具
```json
"dev": "cross-env NODE_ENV=development nodemon --exec babel-node --inspect ./src/index.js"
```

#### 安装koa-compress
> 在生成环境中，压缩中间件
```bash
npm i -S koa-compress
```

#### 修改index.js，压缩中间件
```js
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

const app = new koa();

const isProdMode = process.env.NODE_ENV === 'production' ? true : false;

const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../publich')),
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet()
]);

if (isProdMode) {
  app.use(compress());
}

app.use(middleware);
app.use(router());

app.listen(3000);
```

## JWT登录鉴权

#### 安装koa-jwt
> 用于鉴权
```bash
npm i -S koa-jwt
```

#### src目录下添加config目录，配置JWT，目录结构:
```js
.
├── package.json
├── common
│   ├── ErrorHandle.js
├── config
│   ├── utils.js
│   ├── webpack.config.base.js 
│   ├── webpack.config.dev.js  
│   └── webpack.config.prod.js 
├── dist 
│   └── server.bundle.js
├── src 
│   ├── config 
│   │    ├── index.js
│   ├── api 
│   │    ├── a.js
│   │    └── b.js
│   ├── routes 
│   │    ├── aRouter.js
│   │    ├── bRouter.js
│   │    └── routes.js
│   └── index.js
│    
.
```

#### 写一个jwt鉴权失败的中间件，修改common/ErrorHandle.js
```js
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
```

## 安装jsonwebtoken
> 用于创建token，和校验token
```bash
npm i -S jsonwebtoken
```


## 安装svg-captcha
> 用于生产图形验证码
```bash
npm i -S svg-captcha
```

#### 引用svg-captcha