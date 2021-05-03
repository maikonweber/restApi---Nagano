const express = require('express');

const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());

// Decodar parametros URL
app.use(bodyParser.urlencoded({ extended: false }))

require('./controller/authController')(app);

app.listen(3002);