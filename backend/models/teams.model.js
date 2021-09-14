const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  players: { type: Array },
  win: { type: Number, set: 0 },
  draw: { type: Number, set: 0 },
  lose: { type: Number, set: 0 },
});

module.exports = mongoose.model('Team', teamSchema);