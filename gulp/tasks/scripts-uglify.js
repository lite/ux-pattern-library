var gulp         = require('gulp'),
    config       = require('../config').scripts,
    size         = require('gulp-filesize'),
    uglify       = require('gulp-uglify');

gulp.task('scripts-uglify', ['pldoc_scripts'], function() {
  return gulp.src(config.pldoc_dest)
    .pipe(uglify())
    .pipe(size());
});
