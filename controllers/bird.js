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
exports.bird_create_post = async function(req, res) {
console.log(req.body)
let document = new Bird();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
  document.name = req.body.name;
  document.color = req.body.color; 
  document.size = req.body.size;
try{
    let result = await document.save();
    res.send(result);
}
catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
}
// res.send('NOT IMPLEMENTED: bird create POST');
};
// Handle BIRD delete form on DELETE.
exports.bird_delete = function(req, res) {
res.send('NOT IMPLEMENTED: bird delete DELETE ' + req.params.id);
};
// Handle BIRD update form on PUT.
exports.bird_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: bird update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view 
exports.bird_view_all_Page = async function(req, res) {
    try{
        thebirds = await Bird.find();
        res.render('birds', { title: 'Birds Search Results', results: thebirds });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};