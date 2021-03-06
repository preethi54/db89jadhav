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
router.post('/birds', bird_controller.bird_create_post);
// DELETE request to delete birds.
router.delete('/birds/:id', bird_controller.bird_delete);
// PUT request to update birds.
router.put('/birds/:id', bird_controller.bird_update_put);
// GET request for one birds.
router.get('/birds/:id', bird_controller.bird_detail);
// GET request for list of all Costume items.
router.get('/birds', bird_controller.bird_list);
module.exports = router;
///* GET detail Birds page */
router.get('/detail', bird_controller.bird_view_one_Page);

/* GET create Birds page */
router.get('/create', bird_controller.bird_create_Page);

/* GET create update page */
router.get('/update', bird_controller.bird_update_Page);

/* GET create costume page */
router.get('/delete', bird_controller.bird_delete_Page);