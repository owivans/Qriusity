const port = process.env.PORT || 3000;
const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser')

const usersRoutes = require('./routes/users/users.route');
const quizRoutes = require('./routes/quiz/quiz.route');
const quizCategoriesRoutes = require('./routes/quizCategories/quizCategories.route');
// Initializations
const app = express();

// settings
app.set("port", port);

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json())

// routes
app.use('/api/user', usersRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/categories', quizCategoriesRoutes);

module.exports = app;
