module.exports = task;

var paths = require('../paths.js'),
	libs = require('../libs.js');
	
var gulp = libs.gulp,
    webpack = libs.webpack,
	ts = libs.ts,
    fm = libs.fm,
    dependencyTree = libs.dependencyTree,
    data = libs.data;

function task() {
    // Returns a post-order traversal (list form) of the tree with duplicate sub-trees pruned.
    // This is useful for bundling source files, because the list gives the concatenation order.
    var list = dependencyTree.toList({
        filename: './src/app/nc.ts',
        root: './src/app/**/*.ts'
    });
    
	var files = gulp.src(list, {
        base: './src/app/'
    });

    var tplsList = [];
 
    return gulp.src('./src/app/nc.ts')
        .pipe(webpack(require('./../../webpack.config.js')))
        // .pipe(ts({
        //     modules: 'commonjs',
        //     moduleResolution: 'node',
        //     target: 'es3',
        //     // emitDecoratorMetadata: true,
        //     // experimentalDecorators: true,
        //     // removeComments: false,
        //     // noImplicitAny: false,
        //     // sourceMap: true,
            
        //     // allowSyntheticDefaultImports: true,
            
        //     out: 'output.js'
        // }))  
        .pipe(gulp.dest(paths.scripts.tmp))
        .pipe(data(function(file) {
            var content = fm(String(file.contents));
            var t = content.body.replace(/\s/g, '');
            var tpls = t.match(/[\'"]?templateUrl[\'"]?[\\s]*:[\\s]*[\'"`]([^\'"`]+)[\'"`]/g);
            if(!tpls) {
                return true;
            }
            tpls.forEach(function(tp) {
                var g = tp.split(':');
                var h = './src/' + g[1].replace(/['"]/g, '');
                console.log(h);
                tplsList.push(h);
            });
        }))
        .on('end', function() {
            buildTpls(tplsList);
        });

    function buildTpls(pathsList) {
        return gulp
            .src(pathsList, {
                base: './src/app/'
            })
            .pipe(gulp.dest(paths.scripts.tmp));
    }       
}