const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  players: { type: Array },
  win: { type: Number },
  draw: { type: Number },
  lose: { type: Number },
});

module.exports = mongoose.model('Team', teamSchema);