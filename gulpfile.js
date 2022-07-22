const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const babel = require('gulp-babel');
const rollup = require('gulp-better-rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;

gulp.task('pug', () => {
  return gulp.src(['app/views/**/*.pug', '!app/views/**/_*/*.pug', '!app/views/**/_*/**/*.pug'])
    .pipe(pug({
      // pretty: true
    }))
    .pipe(gulp.dest('./app'))
    .pipe(browserSync.stream())
});

gulp.task('sass', () => {
  return gulp.src("app/scss/**/*.scss")
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
  return gulp.src('app/src/js/components/main.js')
    .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});

gulp.task('serve', gulp.series('sass', function () {

  browserSync.init({
    server: "./app/"
  });

  gulp.watch("app/scss/**/*.scss", gulp.series('sass'));
  gulp.watch('app/views/**/*.pug', gulp.series('pug'));
  gulp.watch('app/src/js/**/*.js', gulp.series('scripts'));
  gulp.watch('app/src/js/**/*.js').on('change', browserSync.reload);
  gulp.watch("app/*.html").on('change', browserSync.reload);
}));

gulp.task('start', gulp.series('serve'));