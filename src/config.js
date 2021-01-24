require('dotenv').config()

const {
  MONGODB_HOST,
  MONGODB_DB,
  PORT,
} = process.env;

module.exports = {
    PORT: PORT,
    MONGODB_HOST: MONGODB_HOST,
    MONGODB_DB: MONGODB_DB,
  }
