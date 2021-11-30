const path = require('path');
const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const { sequelize } = require('./models');




app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors())

const tagRoutes = require('./routes/tag');
const userRoutes = require('./routes/user');

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello HackerKernel."
    })
})

app.use("/api",tagRoutes);
app.use("/api",userRoutes);


const port = (process.env.PORT || 4000)

//Starting a server
app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`)
    try {
        await sequelize.sync();
        console.log('DATABASE SYNCED!');
    } catch (error) {
        console.log(error);
    }
})
