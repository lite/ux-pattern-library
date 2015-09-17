var gulp    = require('gulp'),
    config  = require('../config'),
    del     = require('del');

gulp.task( 'clean', function() {
    return del([
        config.styles.pldoc_dest,
        config.scripts.dest,
        config.scripts.pldoc_dest,
        config.images.dest,
        config.images.pldoc_dest
        config.styles.dest
    ]);
});
