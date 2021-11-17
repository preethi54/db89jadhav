var express = require('express');
var router = express.Router();
const birds_controlers= require('../controllers/bird');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('birds', { title: 'Search Results Birds' });
// });
router.get('/', birds_controlers.bird_view_all_Page );

// GET request for one costume.
router.get('/birds/:id', birds_controlers.bird_detail);

// PUT request to update birds.
router.put('/birds/:id', birds_controlers.bird_update_put);

// DELETE request to delete birds.
router.delete('/birds/:id', birds_controlers.bird_delete);

/* GET detail costume page */
router.get('/detail', birds_controlers.bird_view_one_Page);

/* GET create Birds page */
router.get('/create', birds_controlers.bird_create_Page);

/* GET Bird update page */
router.get('/update', birds_controlers.bird_update_Page);

/* GET create costume page */
router.get('/delete', birds_controlers.bird_delete_Page);

module.exports = router;
