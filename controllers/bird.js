var Bird = require('../models/bird');
// List of all BIRD
exports.bird_list =async function(req, res) {
    // List of all Costumes exports.costume_list = async function(req, res) {
    try{
        thebirds = await Bird.find();
        res.send(thebirds);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }

res.send('NOT IMPLEMENTED: bird list');
};


// for a specific BIRD.
exports.bird_detail = function(req, res) {
res.send('NOT IMPLEMENTED: bird detail: ' + req.params.id);
};
// Handle BIRD create on POST.
exports.bird_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: bird create POST');
};
// Handle BIRD delete form on DELETE.
exports.bird_delete = function(req, res) {
res.send('NOT IMPLEMENTED: bird delete DELETE ' + req.params.id);
};
// Handle BIRD update form on PUT.
exports.bird_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: bird update PUT' + req.params.id);
};