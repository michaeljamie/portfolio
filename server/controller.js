module.exports = {


    send: (req, res ) => {
        console.log(req.body)
        const { name, email, message } = req.body;
        const output = `
        <div style = 'margin: 0px; height: 750px; width: 450px; background: #2AABE2';>
    
            <h3 style = 'color: white; font-size: 50px; margin-left: 65px;'>Contact Received!!</h3>
            <p style = 'color: white; font-size: 25px;'>You have a new contact request: </p>
            <h3 style = 'color: white; font-size: 25px;'>Contact Details:</h3>
            <ul>
                <li style = 'color: white; font-size: 30px;'>Name: ${name}</li>
                <li style = 'color: white; font-size: 30px;'>Email: ${email}</li> 
            </ul>
            <h3 style = 'color: white; font-size: 25px;'>Message</h3>
            <p style = 'color: white; font-size: 30px;'>${message}</p>
        </div>
        `;

         // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        name: 'mail.michaeljamiephoto.com',
        host: 'mail.michaeljamiephoto.com',
        port: 26,
        secure: false,
        debug: true,
         // true for 465, false for other ports
        auth: {
            user: 'doodleninja@michaeljamiephoto.com', // generated ethereal user
            pass: 'Hannah1234!' // generated ethereal password
        },
        tls:{
            rejectUnauthorized: false
        }
        
            
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'doodleninja@michaeljamiephoto.com', // sender address
        to: 'michaeljamiejohnston@gmail.com, familiarfletcher@gmail.com', // list of receivers
        subject: 'New Portfolio Contact ✔', // Subject line
        text: 'New Message!', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(info)
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        
    });

    


}




}