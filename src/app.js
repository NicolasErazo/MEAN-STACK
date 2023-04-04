const express = require('express');
const morgan = require('morgan');
const cors = require('cors')    

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(cors())

//Para Json
app.use(express.json());

//Para Form HTML
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/employees.routes'));
app.use(require('./routes/users.routes'));

module.exports = app;

//npm init -y = Package.json
//npm install express - mongoose - cors - jsonwebtoken
//npm install nodemon -D