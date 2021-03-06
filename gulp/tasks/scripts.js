module.exports = task;

var paths = require('../paths.js'),
	libs = require('../libs.js');

var gulp = libs.gulp,
    webpack = libs.webpack,
    watch = libs.watch,
    ngTemplateUrl = libs.ngTemplateUrl,
    livereload = libs.livereload;

function task(distName, cb) {
    distName = distName || 'nc';
    var running = true;
    var tplsList = [];
 
    gulp.src('./src/app/'+ distName + '/' + distName + '.ts')
        .pipe(webpack(require('./../../webpack/'+ distName +'.config.js')))
        .pipe(gulp.dest(paths.scripts.tmp))
        .pipe(livereload())

        // only one file (ex: app.js)
        .on('data', function(chunk) {
            gulp
                .src(paths.scripts.tmpFiles)
                .pipe(ngTemplateUrl({
                    urlPrefix: './src/',
                    base: './src/app/',
                    newResource: distName
                }))
                .pipe(gulp.dest(paths.scripts.tmp))

                .on('data', function(chunk) {
                    tplsList.push(chunk.history[0]);
                })
                .on('end', function() {
                    buildTpls(tplsList);
                    if(running) {
                        cb();
                        running = false;  
                    }
                });
        });

    function buildTpls(tplsPaths) {
        watch(tplsPaths, function(vinyl) {
            var eName = vinyl.event;
            if(eName !== 'change' && eName !== 'add') {
                return true;
            }

            console.log('HTML Watcher: ' + eName + ': ' + vinyl.path);

            gulp.src(vinyl.path, {
                base: './src/app/'
            }).pipe(gulp.dest(paths.scripts.tmp)).pipe(livereload());
        });
    }       
}