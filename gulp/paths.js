var tmp = './.tmp/',
	dist = './dist/',
    app = './src/app/';

var paths = {
	tmp: tmp,
	dist: dist,
    app: app,
	index: {
		src: './src/app/index.html',
		dist: dist,
		distFile: dist + 'index.html',
		tmp: tmp + '/'
	},
	vendors: {
		dist: [
			dist + 'primary-vendors.js',
			dist + 'secondary-vendors.js',
			dist + 'vendors.css'
		]
	},
	scripts: {
		src: [
            app + '**/*.ts'
        ],
		dist: dist,
		tmp: tmp + 'app/',
		tmpFiles: tmp + 'app/**/*.js',
		distFiles: [
			dist + 'app.js',
			dist + 'app-tpls.js'
		],

		specs: [
			'./src/app/**/*.spec.js',
			'./src/app/**/*.test.js'
		]
	},
	styles: {
		dist: dist,
		tmp: tmp + 'styles/',
		tmpFiles: tmp + 'styles/**/*.css',
		distFiles: dist + 'app.css',

		sass: './src/sass/app.scss',
		sassAll: './src/sass/**/*.scss',
		sassTmp: tmp + 'styles/',
	},
	templates: {
		src: ['./src/app/**/*.html', '!./src/app/index.html'],
		tmp: tmp + 'app/',
		dist: dist
	},
	assets: {
		src: './src/assets/**',
		tmp: tmp + 'assets',
		dist: dist + 'assets/'
	}
};

module.exports = paths;