// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());


app.use(cors());

app.use(helmet());

app.use(hpp());

app.use(expressMongoSanitize());


const rateLimit = expressRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, 
});
app.use(rateLimit);

// Connect to MongoDB using mongoose 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Define your routes and controllers here


app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', data: 'Welcome to your API' });
});


app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

module.exports = app;
