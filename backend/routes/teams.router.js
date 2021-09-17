const express = require('express');
const router = express.Router();

const teams = require('../controllers/teams.controller');

router.get('/teams', teams.loadAll);

module.exports = router;