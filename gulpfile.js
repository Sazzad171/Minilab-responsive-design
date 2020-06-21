const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

// copy html folder
gulp.task('copy-html', function(done) {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
    done();
});

// copy images
gulp.task('copy-img', function(done) {
  gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img'));
    done();
});

// minify js
gulp.task('minify-js', function(done) {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
    done();
});

// sass
gulp.task('sass-compile', function(done) {
  gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
    done();
});

// // optimize image
// gulp.task('image-min', () =>
//   gulp.src('src/img/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist/img'))
// );

// watch realtime
gulp.task('watch', function(done) {
  gulp.watch('src/*.html', gulp.series('copy-html'));
  gulp.watch('src/*.html', gulp.series('copy-img'));
  gulp.watch('src/js/*.js', gulp.series('minify-js'));
  gulp.watch('src/scss/*.scss', gulp.series('sass-compile'));
  done();
});