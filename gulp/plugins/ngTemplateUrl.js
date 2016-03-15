// through2 is a thin wrapper around node transform streams
var through = require('through2');
var gulp = require('gulp');
var fm = require('front-matter');

function ngTemplateUrl(params) {
    var templateUrlRegEx = /[\'"]?templateUrl[\'"]?[\\s]*:[\\s]*[\'"`]([^\'"`]+)[\'"`]/g;
    var base = params.base;
    var urlPrefix = params.urlPrefix;

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
            tpl = tpl.split(':')[1];
            tpl = urlPrefix + tpl.replace(/['"]/g, '');
            list.push(tpl);
        });

        gulp
            .src(list, {
                base: base
            })
            .on('data', function(chunk) {
                self.push(chunk);
            })
            .on('end', function() {
                cb();
            });
    });
}

module.exports = ngTemplateUrl;