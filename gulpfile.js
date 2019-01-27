const gulp = require('gulp');
const webpack = require('webpack-stream');
const merge = require('merge-stream');

gulp.task('default', (cb) => {
    let content = gulp.src([
        './img/**/*',
        './phones/*',
        './index.html',
        './app.css'
    ], {
        base: './'
    })
    .pipe(gulp.dest('./dist'));

    let bundle = gulp.src([
        './scripts/app.js'
    ])
    .pipe(webpack({
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.ejs$/,
                    use: 'raw-loader'
                }
            ]
        },
        output: {
            filename: 'app.js',
        }
    }))
    .pipe(gulp.dest('./dist/scripts'))

    return merge(content, bundle);
});
