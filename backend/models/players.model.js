const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  win: { type: Number },
  draw: { type: Number },
  lose: { type: Number },
});

module.exports = mongoose.model('Player', playerSchema);