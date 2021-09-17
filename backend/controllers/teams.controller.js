const Team = require('../models/teams.model');

exports.loadAll = async (req, res) => {
  try {
    const result = await Team.find();
    if(!result) res.status(404).json({ players: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};