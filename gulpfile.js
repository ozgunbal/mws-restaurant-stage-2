const gulp = require('gulp');

const copy = () => (
    gulp.src('./client/**')
        .pipe(gulp.dest('./.tmp/public'))
)

const watch = () => {
    gulp.watch(['client/**/*.js', 'client/**/*.css', 'client/**/*.html'], ['copy']);
}

gulp.task('copy', copy);
gulp.task('default', ['copy'] ,watch);