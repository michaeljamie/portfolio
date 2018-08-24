const express = require('express'),
  bodyParser = require('body-parser');
  nodemailer = require('nodemailer');
  ctrl = require('./controller');
  

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../dist`));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/api/send', ctrl.send)

app.listen(9000, () => console.log('Server listening on port: 9000'));