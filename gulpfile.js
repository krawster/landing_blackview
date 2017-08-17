var gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	runSequence = require('run-sequence'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

var params = {
	out: 'build',
	images: 'build/images',
	js: 'build/js',
	css: 'build/css',
	fonts: 'build/fonts'
}

//gulp.task('default', ['pug', 'sass', 'libraries-js', 'libraries-css', 'libraries-fonts', 'images', 'js', 'server']);

gulp.task('default', function(callback) {
	runSequence('clean', 'pug', 'sass', 'libraries-js', 'libraries-css', 'libraries-fonts', 'images', 'js', 'server', callback);
});

gulp.task('pug', function(){
	return gulp.src('src/pages/*.pug')
	    .pipe(pug({
	    	pretty: true
	    }))
	    .pipe(gulp.dest(params.out));
});

gulp.task('sass', function(){
	return gulp.src('src/sass/style.scss')
	    .pipe(sass())
	    .pipe(gulp.dest(params.css))
});

gulp.task('libraries-js', function(){
	return gulp.src('src/libraries/**/*.js')
		.pipe(gulp.dest(params.out))
});

gulp.task('libraries-css', function(){
	return gulp.src('src/libraries/**/*.css')
		.pipe(gulp.dest(params.out))
});

gulp.task('libraries-fonts', function(){
	return gulp.src('src/libraries/**/*.{eot,svg,ttf,woff}')
		.pipe(gulp.dest(params.out))
});


gulp.task('images', function(){
	return gulp.src('src/blocks/**/*.{png,jpg,jpeg,svg,gif}')
		.pipe(imagemin())
		.pipe(gulp.dest(params.images))
});

gulp.task('js', function(){
	gulp.src(['src/blocks/**/*.js'])
	.pipe(concat('my-script.js'))
	.pipe(gulp.dest(params.js))
	.pipe(reload({stream: true}));
});

gulp.task('server', function(){
	browserSync.init({
		server: params.out
	});

	gulp.watch('src/**/*.pug', ['pug']);
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/blocks/**/*.{png,jpg,jpeg,svg}', ['images']);
	gulp.watch('src/blocks/**/*.js', ['js']);
});

gulp.task('clean', function(){
	del('build/**/*');
});