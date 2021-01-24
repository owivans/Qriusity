const mongoose = require("mongoose");
const config = require("./config");

const { MONGODB_HOST, MONGODB_DB } = config
const MONGODB_URI = `mongodb+srv://${MONGODB_DB}:${MONGODB_HOST}/${MONGODB_DB}?retryWrites=true&w=majority
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
