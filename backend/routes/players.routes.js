const express = require('express');
const router = express.Router();

const players = require('../controllers/players.controller');

router.get('/players', players.loadAll);

router.delete('/player/:id', players.deletePlayer);

module.exports = router;