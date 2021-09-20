const express = require('express');
const router = express.Router();

const teams = require('../controllers/teams.controller');

router.get('/teams', teams.loadAll);

router.post('/team', teams.addTeam);

router.delete('/team/:id', teams.deleteTeam);

module.exports = router;