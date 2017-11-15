var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./themes/adhatama/src/scss/**/*.scss')
    .pipe(sass({
    	outputStyle : "compressed"
    }).on('error', sass.logError))
    .pipe(gulp.dest('./themes/adhatama/static/css'));
});
 
gulp.task('watch', ['sass'], function () {
  gulp.watch('./themes/adhatama/src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);