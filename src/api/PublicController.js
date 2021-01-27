import svgCaptcha from 'svg-captcha';

class PublicController {
  constructor() { }
  async getCaptcha(ctx) {
    const captcha = svgCaptcha.create({
      size: 6, // 验证码字符串长度
      ignoreChars: '0o1il', // 设置验证码不包含这些字符
      color: true, // 字符是否有颜色
      noise: Math.floor(Math.random() * 5), // 设置干扰线的数量
      width: 150, // svg的宽度
      height: 50
    });
    //console.log(captcha);
    ctx.body = {
      code: 200,
      data: captcha.data
    }
  }
}

export default new PublicController();