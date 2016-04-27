/**
 * Created by krzysztof on 27.04.16.
 */
var gulp = require('gulp')
var stylus = require('gulp-stylus')


gulp.task('css', function () {
    gulp.src('css/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('assets'))
    
})