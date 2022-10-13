import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'

const send_email_nodemailer = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({ success: true, msg: "Health check success" }))
    res.end()
  }

  /**
   * Sending mail using nodemailer & gmail
   */

  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });

  let mailDetails = {
    from: process.env.USER,
    to: 'test@gmail.com',
    subject: 'Test mail',
    text: 'Hi there, this is a test mail sent using nodemailer and gmail.'
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      /**
       * Error : Invalid login: Username and Password not accepted. 
       * 
       * Refer : https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer
       */
      console.log('Error');
    } else {
      console.log('Email sent successfully ✅🎉');
    }
  });


  res.write(JSON.stringify({ success: true, msg: `Hello send_email_nodemailer` }))
  res.end()

}

export default send_email_nodemailer
