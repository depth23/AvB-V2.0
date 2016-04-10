var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("styles", function() {
  "use strict";
  gulp.src("./public/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css/"));
});

gulp.task("default", function() {
  "use strict";
  gulp.watch("./public/sass/**/*.scss", ["styles"]);
});