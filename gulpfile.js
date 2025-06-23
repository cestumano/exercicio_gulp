const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Compilação do SASS
gulp.task('sass', () => {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

// Compressão de imagens
gulp.task('images', () => {
  return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Compressão de JavaScript
gulp.task('scripts', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão
gulp.task('default', gulp.parallel('sass', 'images', 'scripts'));
