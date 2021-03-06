var express = require('express');
var router = express.Router();
// Require the controller for the skills resource
var skillsCtrl = require('../controllers/skills');
// All actual paths begin with "/skills"
/* GET /skills     --- "index" action/functionality */
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// PUT /skills/:id
router.put('/:id', skillsCtrl.update);
module.exports = router;