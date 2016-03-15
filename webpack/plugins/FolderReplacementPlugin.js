var fs = require('fs');

function FolderReplacementPlugin(resourceRegExp, newResource) {
	this.resourceRegExp = resourceRegExp;
	this.newResource = newResource;
}

module.exports = FolderReplacementPlugin;

FolderReplacementPlugin.prototype.apply = function(compiler) {
    var self = this;
	var resourceRegExp = this.resourceRegExp;
    
	compiler.plugin("normal-module-factory", function(nmf) {
		nmf.plugin("before-resolve", resolveContexts);
		nmf.plugin("after-resolve", resolveContexts);
	});

    function resolveContexts(result, callback) {
        if(!result) return callback();
        if(resourceRegExp.test(result.resource)) {
            return resolveContext.apply(self, [result, callback]);
        }
        return callback(null, result);
    }
};

function resolveContext(result, cb) {
    var resourceRegExp = this.resourceRegExp;
	var newResource = this.newResource;
    var pathFixer = fixPath.bind(null, resourceRegExp, newResource);
    
    var newRequest = pathFixer(result.userRequest);
    fs.exists(newRequest, function(exists) {
        if(exists) {
            result.userRequest = pathFixer(result.userRequest);
            result.resource = pathFixer(result.resource);
            result.request = pathFixer(result.request);
            return cb(null, result);
        }
        return cb(null, result);
    });
}

function fixPath(regexp, newSubStr, sorce) {
    return sorce.replace(regexp, newSubStr);
}