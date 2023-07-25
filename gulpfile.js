const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// Development Tasks 
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') 
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) 
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('app/css')) 
});
 
// Watchers
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});