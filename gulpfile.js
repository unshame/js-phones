const gulp = require('gulp');
const webpack = require('webpack-stream');
const merge = require('merge-stream');
const path = require('path');

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

            // load .ejs templates as string
            rules: [
                {
                    test: /\.ejs$/,
                    loader: path.join(__dirname, 'ejs-loader.js')
                }
            ]
        },
        output: {
            filename: 'app.js',
        },

        // serve {} as fs to ejs
        node: {
            fs: 'empty'
        }
    }))
    .pipe(gulp.dest('./dist/scripts'))

    return merge(content, bundle);
});
