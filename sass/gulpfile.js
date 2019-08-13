var gulp = require('gulp');
var sass = require('gulp-sass');//cssコンパイル
var sourcemaps = require('gulp-sourcemaps');
var DEST = '../css/';//20190401追加

//sass
gulp.task('sass',function(){
    return gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({style : 'expanded'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DEST));
});

/// 監視
gulp.task('watch', function(){
  gulp.watch('scss/*.scss', gulp.task('sass'));
});
/// Gulpコマンドで動かすもの 
gulp.task('default', gulp.task('watch'));