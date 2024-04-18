const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const connect = require('gulp-connect');

// Компиляция SCSS/Sass в CSS
gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload()); // Перезагрузка страницы при изменениях
});

gulp.task('default', gulp.series('sass'));

// Запуск локального сервера
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8888,
    livereload: true,
  });
});


// Компиляция Pug в HTML
gulp.task('pug', function () {
  return gulp.src('src/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload()); // Перезагрузка страницы при изменениях
});

// Следим за изменениями в файлах SCSS/Sass и Pug и автоматически компилируем их
gulp.task('watch', function () {
  gulp.watch('src/scss/*.scss', gulp.series('sass'));
  gulp.watch('src/pug/*.pug', gulp.series('pug'));
});

// Задача по умолчанию: компилировать SCSS/Sass и Pug и следить за изменениями
gulp.task('default', gulp.series('sass', 'pug', 'connect', 'watch'));





