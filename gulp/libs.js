var libs = {
	gulp: require('gulp'),
	bower: require('../bower'),
    ts: require('gulp-typescript'),
    fm: require('front-matter'),
    dependencyTree: require('dependency-tree'),
    data: require('gulp-data'),
	rimraf: require('rimraf'),
	mainBowerFiles: require('main-bower-files'),
	inject: require('gulp-inject'),
	watch: require('gulp-watch'),
    express: require('express'),
    webpack: require('webpack-stream'),
    ngTemplateUrl: require('./plugins/ngTemplateUrl')

	// watch: require('gulp-watch'),
    
	// ngAnnotate: require('gulp-ng-annotate'),
	// googlecdn: require('gulp-google-cdn'),

	// es: require('event-stream'),
	// proxy: require('proxy-middleware'),
	// url: require('url'),

    // gzip: require('gulp-gzip'),
	// clean: require('gulp-clean'),
	// rimraf: require('rimraf'),
	// mkdirp: require('mkdirp'),
    
};

module.exports = libs;