require('dotenv').config();
const express = require('express');
const { dbConnect } = require('./config/mongo')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const http = require('http').Server(app);

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200'}));

// Configuración de nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  post: 587,
  //secure: false,
  auth: {
    user: 'stevenfernando21@gmail.com',
    pass: 'abvrjckuaarctyqn'
  }
});

  app.post('/send-email', (req, res) => {
    console.log('sj')
    if (!req.body) {
        console.log('s')
        return res.status(400).send({ error: 'No se recibieron datos en el cuerpo de la solicitud' });
    }
    
    const mailOptions = {
        from: 'stevenfernando21@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.message
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        console.log('xj')
        console.log(res.statusCode);
        if (error) {
        return res.status(500).send(error);
        }
        return res.status(200).send('Correo electrónico enviado exitosamente');
    });
  });
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(cors());
app.use(express.json());

//routes
app.use('/api/', require('./app/routes'))

//connection mongodb
dbConnect();
http.listen(PORT, () => {
  console.log('nodejs app run ' + PORT)
})
