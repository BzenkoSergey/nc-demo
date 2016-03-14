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
 * Templates
 */
// gulp.task('templates', utils.getTask('templates'));
// gulp.task('templates-watch', utils.getTask('templatesWatch'));

/**
 * Scripts
 */
gulp.task('scripts', utils.getTask('scripts'));
// gulp.task('scripts-watch', utils.getTask('scriptsWatch'));


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


/**
 * Tmp build
 */
gulp.task('tmp', [
	'scripts',
    'connect'
], function() {
    gulp.start('index');
});