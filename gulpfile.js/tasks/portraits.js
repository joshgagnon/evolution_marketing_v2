var config      = require('../config')
var browserSync = require('browser-sync');
var changed = require('gulp-changed');

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var path        = require('path')

var paths = {
   src: path.join(config.root.src, config.tasks.portraits.src, '/**/*.{' + config.tasks.portraits.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.portraits.dest)
}

var portraitsTask = function() {

    return gulp.src(paths.src)
        .pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(imageResize({
            width: 400,
            height: 400,
            filter: 'Catrom',
            imageMagick: true
        }))
        .pipe(imagemin({
            progressive: true
        })) // Optimize
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.reload({
            stream: true
        }))
}

gulp.task('portraits', portraitsTask);


module.exports = portraitsTask;