const nodemailer = require('nodemailer');
const oauth2 = require('oauth2');

module.exports = app => {
    app.get('/api/fishywishy', function(req, res){
      console.log(">>>>>YO DUDE!");

      var smtpTransport = nodemailer.createTransport({
        service:"Gmail",
        auth: {
          type: 'OAuth2',
          user: 'fooDealTeam@gmail.com',
          clientId: '1066350232183-o7epl088l1c6ah7lasrh7slemd4opobl.apps.googleusercontent.com',
          clientSecret: 'q57LBoyPDxNrfYbR3bRkvMqG',
          refreshToken: '1/wYzesYWz7C6Ct6fprRWJTZwNRLX88Lw0fb2s8iQ91-U'
    
        //   user: config.mailUser,
        //   clientId: config.clientId,
        //   clientSecret: config.clientSecret,
        //   refreshToken: config.refreshToken
        }
    });
    
    var mailOptions = {
        from: 'fooDeal Team fooDealTeam@gmail.com',
        to: 'jamielemercier@gmail.com',
        subject: 'Your fooDeal Shopping List',
        text: 'Hello World!!'
    }
    
    smtpTransport.sendMail(mailOptions, function (err, res) {
        if(err){
            console.log('Error', err);
            res.status(500)
        } else {
            console.log('Email Sent');
            res.status(200)
        }
        })
    
    });
    
}

