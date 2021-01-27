import nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
async function send(sendInfo) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.163.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'chenliqiong.bb@163.com', // generated ethereal user
      pass: '1233210A', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"认证邮件" <chenliqiong.bb@163.com>`, // sender address
    to: sendInfo.email, // list of receivers
    subject: `Hello ${sendInfo.user}`, // Subject line
    text: `你的邀请码是${sendInfo.code},过期时间：${sendInfo.expire}前有效`, // plain text body
    html: `<div style="background-color: #ccc;color:#fff;font-size: 24px;">你的邀请码是${sendInfo.code},过期时间：${sendInfo.expire}前有效</div>`, // html body
  });

  return "Message sent: %s", info.messageId;
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// send().catch(console.error);

export default send;