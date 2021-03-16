var express = require('express');
var router = express.Router();
// Require the controller for the skills resource
var skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/skills"

/* GET /skills --- "index" action/functionality */
router.get('/', skillsCtrl.index);
// Get /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
