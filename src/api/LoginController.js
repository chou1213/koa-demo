import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'
import send from '../config/MailConfig'
import moment from 'moment'

class LoginController {
  constructor() { }

  async forget(ctx) {
    const { body } = ctx.request;
    try {
      const result = await send({
        email: '309746985@qq.com',
        code: '123',
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        user: 'jojo'
      });

      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功'
      }

    } catch (e) {
      console.log(e);
    }
  }

  async login(ctx) {
    const token = jsonwebtoken.sign({
      _id: 'abbb',
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24
    }, config.JWT_SECRET);

    ctx.body = {
      code: 200,
      token
    }
  }
}

export default new LoginController();