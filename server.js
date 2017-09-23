var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  session=require('express-session'),
  MongoStore = require('connect-mongo')(session),
  User = require('./api/models/userModel'),
  Attendance = require('./api/models/attendanceModel'),
  Holiday = require('./api/models/holidayModel');
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/JNVdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
     secret : "SSR",
     resave : false,
     saveUninitialized : true,
    store:new MongoStore({ mongooseConnection : mongoose.connection ,ttl: 24 * 60 * 60 }),

    }));

var routes = require('./api/routes/loginRoutes');
routes(app);


app.listen(port);


console.log('JNV  RESTful API server started on: ' + port);