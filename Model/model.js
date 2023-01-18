const mongoose = require('mongoose');

const library= mongoose.Schema({
  book: {
    type: String,
    required: true,
  },
  auth: {
    type: String,
    required: true,
  },
  lent_status: {
    type: String,
    required: true,
  },
  lent_to: {
    type: String,
  },
  lent_on: {
    type: String,
  },
},
{
  timeStamp:true,
});

module.exports = mongoose.model("Book", library);