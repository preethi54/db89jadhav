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

module.exports = router;
