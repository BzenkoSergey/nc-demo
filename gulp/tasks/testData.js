module.exports = task;

var paths = require('../paths.js'),
	libs = require('../libs.js');

var gulp = libs.gulp,
    watch = libs.watch,
    livereload = libs.livereload;

function task() {
    gulp.src('./src/app/**/*.json')
        .pipe(gulp.dest(paths.scripts.tmp))
        .pipe(livereload());

    watch('./src/app/**/*.json', function(vinyl) {
        var eName = vinyl.event;
        if(eName !== 'change' && eName !== 'add') {
            return true;
        }

        console.log('HTML Watcher: ' + eName + ': ' + vinyl.path);

        gulp
            .src(vinyl.path, {
                base: './src/app/'
            })
            .pipe(gulp.dest(paths.scripts.tmp))
            .pipe(livereload());
    });
}