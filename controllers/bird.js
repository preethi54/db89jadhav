var Bird = require('../models/bird');
// List of all BIRD
exports.bird_list = async function (req, res) {
    // List of all Costumes exports.costume_list = async function(req, res) {
    try {
        thebirds = await Bird.find();
        res.send(thebirds);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }

    res.send('NOT IMPLEMENTED: bird list');
};


// for a specific BIRD.
exports.bird_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Bird.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
    //res.send('NOT IMPLEMENTED: bird detail: ' + req.params.id);
};
// Handle BIRD create on POST.
exports.bird_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Bird();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.color = req.body.color;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    // res.send('NOT IMPLEMENTED: bird create POST');
};
// Handle BIRD delete form on DELETE.
exports.bird_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Bird.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
    //res.send('NOT IMPLEMENTED: bird delete DELETE ' + req.params.id);
};
// Handle BIRD update form on PUT.
exports.bird_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Bird.findById(req.params.id)
        // Do updates of properties
        if (req.body.name)
            toUpdate.name = req.body.name;
        if (req.body.color)
            toUpdate.color = req.body.color;
        if (req.body.size)
            toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
    //res.send('NOT IMPLEMENTED: bird update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view 
exports.bird_view_all_Page = async function (req, res) {
    try {
        thebirds = await Bird.find();
        res.render('birds', { title: 'Birds Search Results', item: thebirds });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.bird_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Bird.findById(req.query.id)
        res.render('birddetail',
            { title: 'Bird Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a show one view with id specified by query
exports.bird_create_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Bird.findById(req.query.id)
        res.render('birddetail',
            { title: 'Bird Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};