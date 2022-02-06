var gulp = require("gulp");
var cssnano = require("gulp-cssnano");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp
    .src("app/style.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("dist"))
});

//gulp.task("style", function () {
//  return gulp
//    .src("dist/css/style.css")
//    .pipe(autoprefixer())
//    .pipe(gulp.dest("build"));
//});

gulp.task('prefixer', function(){
  return gulp
  .src("dist/style.css")
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(gulp.dest('dist'))
});

gulp.task("js", function () {
  return gulp
    .src(["app/js/plugins/*.js", "app/js/*.js"])
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function () {
  gulp.watch("app/*.scss", ["sass"]);
  gulp.watch("app/js/**/*.js", ["js"]);
});
