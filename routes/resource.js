var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bird_controller = require('../controllers/bird');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// BIRD ROUTES ///
// POST request for creating a birds.
router.post('/resource/birds', bird_controller.bird_create_post);
// DELETE request to delete birds.
router.delete('/resource/birds/:id', bird_controller.bird_delete);
// PUT request to update birds.
router.put('/resource/birds/:id', bird_controller.bird_update_put);
// GET request for one birds.
router.get('/resource/birds/:id', bird_controller.bird_detail);
// GET request for list of all Costume items.
router.get('/resource/birds', bird_controller.bird_list);
module.exports = router;
//