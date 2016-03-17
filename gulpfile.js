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
 * Test Data
 */
gulp.task('test-data', utils.getTask('testData'));

/**
 * Scripts
 */
gulp.task('scripts', utils.getTask('scripts').bind(null, 'nc'));
gulp.task('scripts-direct', utils.getTask('scripts').bind(null, 'direct'));
gulp.task('scripts-public', utils.getTask('scripts').bind(null, 'public'));


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

gulp.task('server-public', ['clean-tmp'], function() {
	gulp.start('tmp-public');
});


/**
 * Tmp build
 */
gulp.task('tmp', [
	'scripts',
    'test-data',
    'connect'
], function() {
    gulp.start('index');
});

gulp.task('tmp-direct', [
	'scripts-direct',
    'test-data',
    'connect'
], function() {
    gulp.start('index');
});

gulp.task('tmp-public', [
	'scripts-public',
    'test-data',
    'connect'
], function() {
    gulp.start('index');
});