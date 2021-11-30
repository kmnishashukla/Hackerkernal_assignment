const path = require('path');
const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config()
const { sequelize } = require('./models');




app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello Kolonizer"
    })
})
