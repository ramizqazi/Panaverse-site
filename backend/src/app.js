const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const debug = require('debug')('server:bin/www');

const { MONGODB_URI } = require('./config/secrets.config');
const CoreCoursesRouter = require('./core-courses/route.core-courses');
const SpecializationsRouter = require('./specializations/route.specializations');

const app = express();

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    debug('Mongodb Connected');
  })
  .catch((e) => {
    debug('Failed To Connected Db :', e);
  });

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use('/core-courses', CoreCoursesRouter);
app.use('/specializations', SpecializationsRouter);

module.exports = app;
