import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'

class LoginController {
  constructor() { }
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