const express = require('express'),
  bodyParser = require('body-parser');
  nodemailer = require('nodemailer');
  ctrl = require('./controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../build`));

app.post('/api/send', ctrl.send)

app.listen(3005, () => console.log('Server listening on port: 3005'));