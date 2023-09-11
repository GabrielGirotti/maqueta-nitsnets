const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", () =>
  gulp
    .src("./scss/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(gulp.dest("./css"))
);

gulp.task("default", () => {
  gulp.watch("./scss/**/*.scss", gulp.series("sass"));
});
