const sanitize = require('mongo-sanitize');

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

exports.addTeam = async (req, res) => {
  try {
    const bodySanitize = sanitize(req.body);
    const { name } = bodySanitize;

    if(name !== null && name !== '') {
      const newTeam = new Team({
        name: name,
        players: [],
        win: 0,
        draw: 0,
        lose: 0,
      });

      await newTeam.save();
      res.json({ message: 'Team Added', status: true, newTeam: newTeam });
    } else res.status(404).json({ message: 'Problem with adding a team', status: false });
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.addTeamPlayer = async (req, res) => {
  try {
    const bodySanitize = sanitize(req.body);
    const { playerId } = bodySanitize;

    if(playerId !== null && playerId !== '') {
      const team = await Team.findById(req.params.id);
      if(team) {
        team.players = [...team.players, playerId];
        await team.save();
        res.json({ message: 'Player added to the team', status: true });
      } else res.status(404).json({ message: 'Problem with adding a player to the team', status: false });
    }
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.deleteTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if(team) {
      await team.remove();
      res.json({ message: 'Team Removed', status: true });
    } else res.status(404).json({ message: 'Problem with removing a team', status: false });
  } catch(err) {
    res.status(500).json(err);
  }
};