//Gulp
var gulp = require("gulp");

//Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

//Compile Sass
gulp.task("styles", function() {
  "use strict";
  gulp.src("./public/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css/"));
});

//Concatenate & Minify JS
gulp.task('scripts', function() {
  "use strict";
  gulp.src('./public/JS/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/dist'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/js'));
});

//Minify Images
//gulp.task('img-min', () =>
//    gulp.src('./public/img/*')
//        .pipe(imagemin())
//        .pipe(gulp.dest('./public/dist/images'))
//);

//Watch Files for Changes
gulp.task('watch', function() {
  "use strict";
  gulp.watch('./public/JS/*.js', ['scripts']);
  gulp.watch("./public/sass/**/*.scss", ["styles"]);
});


gulp.task('default', ['styles', 'scripts', 'watch', /*'img-min'*/]);
