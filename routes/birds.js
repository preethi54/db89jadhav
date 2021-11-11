var express = require('express');
var router = express.Router();
const birds_controlers= require('../controllers/bird');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('birds', { title: 'Search Results Birds' });
// });
router.get('/', birds_controlers.bird_view_all_Page );
module.exports = router;
