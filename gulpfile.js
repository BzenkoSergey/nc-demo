var libs = require('./gulp/libs.js'),
	utils = require('./gulp/utils.js');

var gulp = libs.gulp;

/**
 * Utils
 */
gulp.task('clean-tmp', utils.getTask('cleanTmp'));

/**
 * HTTP Server
 */
gulp.task('connect', utils.getTask('connect'));

/**
 * Scripts
 */
gulp.task('scripts', utils.getTask('scripts').bind(null, 'nc'));
gulp.task('scripts-direct', utils.getTask('scripts').bind(null, 'direct'));


// /**
//  * Index HTML
//  */
gulp.task('index', utils.getTask('index'));
// gulp.task('index-watch', utils.getTask('indexWatch'));


/**
 * Developer server
 */
gulp.task('server', ['clean-tmp'], function() {
	gulp.start('tmp');
});

gulp.task('server-direct', ['clean-tmp'], function() {
	gulp.start('tmp-direct');
});


/**
 * Tmp build
 */
gulp.task('tmp', [
	'scripts',
    'connect'
], function() {
    gulp.start('index');
});

gulp.task('tmp-direct', [
	'scripts-direct',
    'connect'
], function() {
    gulp.start('index');
});