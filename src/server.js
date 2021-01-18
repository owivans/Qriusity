const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const morgan = require("morgan");
const connectMongo = require("connect-mongo");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')


const usersRoutes = require('./routes/users/users.route');

// Initializations
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(methodOverride("_method"));
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

module.exports = app;