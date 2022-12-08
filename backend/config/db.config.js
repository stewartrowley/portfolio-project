const dotenv = require('dotenv');
mongoose.set('strictQuery', true);
dotenv.config()

module.exports = {
  url: process.env.MONGODB_URI
}