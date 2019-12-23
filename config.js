require('dotenv').config();

var db_url = process.env.CONNECTION_STRING;

module.exports = db_url;
