const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync').create();


gulp.task('server',['watch'], ()=>{
	browserSync.init({
		server: {
			baseDir: 'public'
		},
		port: 3001,
		logLevel: "debug",
		open: false,
		reloadOnRestart: true,
		notify: false
	})
})

gulp.task('watch', ()=>{
	watch('app/**/*.html', ()=>{
		gulp.start('app.html')
		browserSync.reload()
	})
	watch('app/**/*.css', ()=>{
		gulp.start('app.css')
		browserSync.reload()
	})
	watch('app/**/*.js', ()=>{
		gulp.start('app.js')
		browserSync.reload()
	})
	watch('app/**/*.assets', ()=>{
		gulp.start('app.assets')
		browserSync.reload()
	})
})