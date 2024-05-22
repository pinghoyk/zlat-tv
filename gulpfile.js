const gulp = require('gulp');
const data = require('gulp-data');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const connect = require('gulp-connect');
const fs = require('fs');

// Функция для получения данных из файла data.json
function getData() {
  return JSON.parse(fs.readFileSync('./src/data.json'));
}

// Компиляция SCSS/Sass в CSS
gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload()); // Перезагрузка сервера при изменениях
});

// Компиляция Pug в HTML
gulp.task('pug', function() {
  return gulp.src('src/pug/*.pug')
    .pipe(data(getData))  // Передача данных в шаблон
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

// Запуск локального сервера
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
  });
});

// Следим за изменениями в файлах SCSS/Sass и Pug и автоматически компилируем их
gulp.task('watch', function () {
  gulp.watch('src/scss/*.scss', gulp.series('sass'));
  gulp.watch('src/pug/*.pug', gulp.series('pug'));
});

// Задача по умолчанию: компилировать SCSS/Sass и Pug, запускать локальный сервер и следить за изменениями
gulp.task('default', gulp.series('sass', 'pug', 'connect', 'watch'));
