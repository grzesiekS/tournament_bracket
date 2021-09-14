const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  win: { type: Number, set: 0 },
  draw: { type: Number, set: 0 },
  lose: { type: Number, set: 0 },
});

module.exports = mongoose.model('Player', playerSchema);