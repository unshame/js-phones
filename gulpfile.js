const gulp = require('gulp');
const merge = require('merge-stream');

gulp.task('default', (cb) => {
    let content = gulp.src([
        './img/**/*',
        './phones/*',
        './scripts/**/*',
        './index.html',
        './app.css'
    ], {
        base: './'
    })
    .pipe(gulp.dest('./dist'));

    let modules = gulp.src([
        './node_modules/my-crappy-components/*.js'
    ], {
        base: './node_modules'
    })
    .pipe(gulp.dest('./dist/scripts'));

    return merge(content, modules);
});
