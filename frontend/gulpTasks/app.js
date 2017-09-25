const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const jshint = require('gulp-jshint')

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets', 'app.lint'])

gulp.task('app.html', ()=>{
	gulp.src('app/**/*.html')
	.pipe(htmlmin({collapseWhitespace :  true}))
	.pipe(gulp.dest('public'))
})

gulp.task('app.css', ()=>{
	gulp.src('app/**/*.css')
	.pipe(uglifycss({"uglyComments" : true}))
	.pipe(concat('app.min.css'))
	.pipe(gulp.dest('public/assets/css'))
})

gulp.task('app.js', ()=>{
	gulp.src('app/**/*.js')
	.pipe(babel({presets: ['es2015']}))
	.pipe(uglify())
	.pipe(concat('app.min.js'))
	.pipe(gulp.dest('public/assets/js'))
})

gulp.task('app.lint', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('app.assets', ()=>{
	gulp.src('assets/**/*.*')
	.pipe(gulp.dest('public/assets'))
})