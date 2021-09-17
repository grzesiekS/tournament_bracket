const Player = require('../models/players.model');

exports.loadAll = async (req, res) => {
  try {
    const result = await Player.find();
    if(!result) res.status(404).json({ players: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};