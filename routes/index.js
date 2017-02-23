var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res) {
    projects.min = false;
    res.render('index', projects);
};

exports.viewMin = function(req, res) {
    projects.min = 'rwar';
    res.render('index', projects);
};
