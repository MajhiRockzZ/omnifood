var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

// DEVELOPMENT TASKS
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: './'
        }
    })
})

// WATCHERS
gulp.task('watch', function () {
    gulp.watch('resources/css/**/*.css', browserSync.reload);
    gulp.watch('./*.html', browserSync.reload);
})

// BUILD SEQUENCES
gulp.task('default', function (callback) {
    runSequence('browserSync', 'watch', callback)
})