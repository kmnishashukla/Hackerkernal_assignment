const path = require('path');
const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config()
const { sequelize } = require('./models');