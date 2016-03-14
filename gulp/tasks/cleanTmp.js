module.exports = task;

var paths = require('../paths.js'),
	libs = require('../libs.js');
	
var gulp = libs.gulp,
	rimraf = libs.rimraf;

function task(cb) {
	rimraf(paths.tmp, cb);
}