var gulp = require('gulp');

module.exports = function(options){
  options.src = options.src || 'app/images/**/*.+(png|gif|jpg|jpeg|svg)';
  options.dest = options.dest || 'www/build/images';

  return gulp.src(options.src)
    .pipe(gulp.dest(options.dest));
}
