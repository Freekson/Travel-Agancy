const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const del = require('del');
const browserSync = require('browser-sync').create();
var less = require('gulp-less');
var path = require('path');

//array for files
var cssFiles = [
    './src/less/css/normalize.css',
    './src/less/css/function.css',
    './src/less/css/main.css',
    './src/less/css/_header.css',
    './src/less/css/_footer.css',
    './src/less/css/_desktop.css',
    './src/less/css/_laptop.css',
    './src/less/css/_tablet.css',
    './src/less/css/_mobile.css',
]
const lessFiles = [
    './src/less/main.less',
    //space for yours less files
    './src/less/_header.less',
    './src/less/_footer.less',
    './src/less/_desktop.less',
    './src/less/_laptop.less',
    './src/less/_tablet.less',
    './src/less/_mobile.less'
]
const jsFiles = [
    './src/js/main.js'
    //space for yours js files
]


//task for styles
function styles() {
    //all files assembly
    return gulp.src(cssFiles)
        //concate files
        .pipe(concat('style.css'))
        //autoprefixer
        .pipe(autoprefixer({
            cascade: false
        }))
        //minify css
        .pipe(cleanCSS({
            level: 2,
            all: false, // sets all values to `false`
            removeDuplicateRules: true
        }))
        //output file
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

//task convet less to css 
/*function convert() {
    return gulp.src(lessFiles)
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./src/less/css'));
}
*/
//taks for js scripts
function scripts() {
    return gulp.src(jsFiles)
        //concate files
        .pipe(concat('script.js'))
        //minify js
        .pipe(terser({
            toplevel: true
        }))
        //output file
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

//task delete all files from directory
function clean() {
    return del(['build/*'])
}

//task watch
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    //watch css files
    //gulp.watch('./src/less/**/*.less', gulp.series(convert, styles))
    gulp.watch('./src/less/css/**/*.css', styles)
        //watch js files
    gulp.watch('./src/js/**/*.js', scripts)
        //start sync when html is changed
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
//gulp.task('convert', convert);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));
gulp.task('dev', gulp.series('build', 'watch'));