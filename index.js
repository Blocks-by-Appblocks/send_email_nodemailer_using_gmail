

const send_email_nodemailer = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello send_email_nodemailer`}))
  res.end()
  
}

export default send_email_nodemailer
