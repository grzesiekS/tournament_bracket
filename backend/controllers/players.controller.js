const sanitize = require('mongo-sanitize');
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

exports.addPlayer = async (req, res) => {
  try {
    const bodySanitize = sanitize(req.body);
    const {name} = bodySanitize;
    if(name !== null && name !== '') {
      const newPlayer = new Player({
        name: name,
        win: 0,
        draw: 0,
        lose: 0,
      });

      await newPlayer.save();
      res.json({ message: 'Player Added', status: true, newPlayer: newPlayer });
    } else res.status(404).json({ message: 'Problem with adding a player', status: false });
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if(player) {
      player.remove();
      res.json({ message: 'Player Removed', status: true });
    } else res.status(404).json({ message: 'Problem with removing a player', status: false });
  } catch(err) {
    res.status(500).json(err);
  }
};