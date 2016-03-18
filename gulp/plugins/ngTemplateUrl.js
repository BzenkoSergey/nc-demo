// through2 is a thin wrapper around node transform streams
var through = require('through2');
var gulp = require('gulp');
var fm = require('front-matter');
var fs = require('fs');

function ngTemplateUrl(params) {
    var templateUrlRegEx = /[\'"]?templateUrl[\'"]?[\\s]*:[\\s]*[\'"`]([^\'"`]+)[\'"`]|[\'"]?templateUrl[\'"]?[\\s]*=[\\s]*[\'"`]([^\'"`]+)[\'"`]/g;
    var base = params.base;
    var urlPrefix = params.urlPrefix;
    var newResource = params.newResource;

    return through.obj(function(file, enc, cb) {
        if(file.isNull()) {
            return cb();
        }    
        
        var self = this;
        var content = fm(String(file.contents)).body;
        content = content.replace(/\s/g, '');
        
        var tpls = content.match(templateUrlRegEx);
        if(!tpls) {
            return cb();
        }
        
        var list = [];
        tpls.forEach(function(tpl) {
            tpl = tpl.split(/:|=/)[1];
            tpl = urlPrefix + tpl.replace(/['"]/g, '');
            list.push(tpl);
        });

        gulp
            .src(list, {
                base: base
            })
            // .pipe(through.obj(function(file, enc, cb2) {
            //     // var content = fm(String(file.contents));
            //     // file.contents = new Buffer(content.body);
            //     // return content.attributes;
                
            //     // this.push(file);
            //     // cb2();
                
            //     //
                
            //     var sss = this;
            //     var path = file.history[0];
            //     path = path.replace(/app\\common/, 'app\\' + newResource);
  
            //     fs.exists(path, function(exists) {
            //         //console.log('-================');
            //         if(exists) {
            //         //console.log('-===dddddddddd=============');
            //             gulp
            //                 .src(path, {
            //                     base: base
            //                 })
            //                 .on('data', function(chunk) {
            //                     self.push(chunk);
            //                     file.contents = chunk.contents;
            //                     cb2(null, file)
            //                 });
            //             return;
            //         }
            //        // console.log(2, file.history[0]);
                    
            //         cb2(null, file);
            //     });
                
            //     //console.log(1, file.history[0]);
            //     //self.push(file);
            //     //cb2(undefined, file);
            // }))
            .on('data', function(chunk) {
                //console.log(12, chunk.history[0]);
                self.push(chunk);
            })
            .on('end', function() {
                //console.log(55555555555555555);
                cb();
            });
    });
}

module.exports = ngTemplateUrl;