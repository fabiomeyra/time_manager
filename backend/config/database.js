const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/db_time_manager', {
  useMongoClient: true,
  /* other options */
});


mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório"