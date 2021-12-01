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

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
/* GET update costume page */
router.get('/update', secured,birds_controlers.bird_update_Page);

/* GET create Birds page */
router.get('/create', secured,birds_controlers.bird_create_Page);

/* GET create costume page */
router.get('/delete', secured,birds_controlers.bird_delete_Page);

module.exports = router;
