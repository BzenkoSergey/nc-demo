module.exports = task;

var paths = require('../paths.js'),
	libs = require('../libs.js');

var gulp = libs.gulp,
	express = libs.express;

function task() {
    var app = express();

    app.use('/', express.static(paths.tmp));
    app.use('/components', express.static('./bower_components'));

    app.listen(2000, function () {
        console.log('Dev Server. Port: 2000');
    });
}