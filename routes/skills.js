var express = require('express');
var router = express.Router();
// Require the controller for the skills resource
var skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/skills"

/* GET /skills --- "index" action/functionality */
router.get('/', skillsCtrl.index);
// Get /skills/new
router.get('/new', skillsCtrl.new);
// Get /skills/:id
router.get('/:id', skillsCtrl.show);
// POST request /skills
router.post('/', skillsCtrl.create);
// DELETE a skill /skills/:id
router.delete('/:id', skillsCtrl.delete);
// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// PUT /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;
