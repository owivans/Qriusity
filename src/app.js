const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const connectMongo = require("connect-mongo");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const usersRoutes = require('./routes/users/users.route');
const quizRoutes = require('./routes/quiz/quiz.route');

// Initializations
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json())
const MongoStore = connectMongo(session);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// routes
app.use('/api/user', usersRoutes);
app.use('/api/quiz', quizRoutes);

module.exports = app;