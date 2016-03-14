var libs = require('./libs.js');

module.exports = {
	getTask: getTask,
	fileTypeFilter: fileTypeFilter,
	getBowerFiles: getBowerFiles,
    getFileNameFromPath: getFileNameFromPath,
    getPrimaryLibs: getPrimaryLibs
};

function getBowerFiles() {
	return libs.mainBowerFiles();
}

/**
 * Get Gulp Task (use this method to import Gulp Task from external file)
 */
function getTask(task) {
	return require('./tasks/' + task);
}

/**
 * Filter an array of files according to file type
 *
 * @param {Array} files
 * @param {String} extension
 * @return {Array}
 */
function fileTypeFilter(files, extension) {
	var regExp = new RegExp('\\.' + extension + '$');
	return files.filter(regExp.test.bind(regExp));
}

function getFileNameFromPath(path) {
    var paths = path.split(/\\|\//);
    var lastSegment = paths[paths.length - 1];
    return lastSegment;
};

function getPrimaryLibs() {
    return [
        'angular.js',
        'jquery.js',
        'materialize.js'
    ];
}