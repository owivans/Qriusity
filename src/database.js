const mongoose = require("mongoose");
const config = require("./config");

const MONGODB_URI = `mongodb+srv://qriusity_db:Cflqp0TebPelL46H@cluster0.n0hpr.mongodb.net/qriusity_db?retryWrites=true&w=majority
`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Mongodb is connected to", db.connection.host))
  .catch((err) => console.error(err));
