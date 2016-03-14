module.exports = task;

var paths = require('../paths.js'),
	libs = require('../libs.js'),
	utils = require('../utils.js');

var gulp = libs.gulp,
	inject = libs.inject,
	es = libs.es;

function task() {
	var appBowerFiles = utils.getBowerFiles(),
		bowerFiles = gulp.src(appBowerFiles, { read: false });

	var target = gulp.src(paths.index.src),
		sources = gulp.src(paths.scripts.tmpFiles);

	return target
		.pipe(inject(bowerFiles, {
            addPrefix: 'components',
			ignorePath: 'bower_components',
			starttag: '<!-- inject:vendor:{{ext}} -->'
		}))
		.pipe(inject(sources, {
			ignorePath: '.tmp'
		}))
    	.pipe(gulp.dest(paths.index.tmp));
}