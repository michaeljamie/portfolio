module.exports = {


    send: (req, res ) => {
        const { formname, formemail, formsubject, formmessage } = req.body;
        const output = `
        <div style = 'margin: 0px; height: 750px; width: 450px; background: #2AABE2';>
    
            <img style = 'height: 140px; margin-left: 140px; margin-top: 30px;' src='https://lh3.googleusercontent.com/-Cm-4F7seaKE/W151RchQuUI/AAAAAAAAzPA/I-RekvHbiQwFQt-3TTzLmbOF4qOofPwsQCL0BGAYYCw/h362/2018-07-29.png' alt="avatar"/>
            <h3 style = 'color: white; font-size: 50px; margin-left: 65px;'>Doodle Ninja</h3>
            <p style = 'color: white; font-size: 25px;'>You have a new contact request: </p>
            <h3 style = 'color: white; font-size: 25px;'>Contact Details</h3>
            <ul>
                <li style = 'color: white; font-size: 30px;'>Name: ${formname}</li>
                <li style = 'color: white; font-size: 30px;'>Email: ${formemail}</li>
                <li style = 'color: white; font-size: 30px;'>Subject: ${formsubject}</li>
            </ul>
            <h3 style = 'color: white; font-size: 25px;'>Message</h3>
            <p style = 'color: white; font-size: 30px;'>${formmessage}</p>
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
        subject: 'Doodle Ninja Contact Request ✔', // Subject line
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