// 获取 gulp
var gulp = require('gulp');

// 获取 uglify 模块（用于压缩 JS）,to minify js files
var uglify = require('gulp-uglify');

// to concat files
var concat = require('gulp-concat');

// to minify css
var minifyCSS = require('gulp-minify-css');

// to minify images
var imagemin = require('gulp-imagemin');

// 获取 gulp-less 模块 to build less
var less = require('gulp-less');

// build sass
var sass = require('gulp-ruby-sass');

// build files map for js /css /less sass
var sourcemaps = require('gulp-sourcemaps');

// css autoprefix
var autoprefixer = require('gulp-autoprefixer');

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 1. 找到文件
    gulp.src('js/*.js')
    // 2. 压缩文件
        .pipe(uglify())
    // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
});

// uglify and concat file
gulp.task('build', function () {
    // find files
    gulp.src('./js/*.js')
    // uglify the js floder files
        .pipe(uglify())
    // 把所有压缩的文件合并 为all.min.js 不需要指定目录信息
        .pipe(concat('all.min.js'))
    //  输出文件到相应的目录
        .pipe(gulp.dest('./build'));
});


// minify css files
gulp.task('compressCss', function () {
    // 1. 找到文件
    gulp.src('css/*.css')
    // css auto prefixer
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
    // 2. 压缩文件
        .pipe(minifyCSS())
    // 3. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))
});


// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('minifyImages', function () {
    // 1. 找到图片
    gulp.src('images/*.*')
        // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
        // 3. 另存图片
        .pipe(gulp.dest('dist/images'))
});


// 编译less
// 在命令行输入 gulp less 启动此任务
gulp.task('buildLess', function () {
    // 1. 找到 less 文件
    gulp.src('less/**.less')
        // 2. 编译为css
        .pipe(less())
        // 3. 另存文件
        .pipe(gulp.dest('dist/less-css'));
});


// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('buildSass', function() {
    return sass('sass/*', { sourcemap: true })
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        // For inline sourcemaps
        .pipe(sourcemaps.write())

        // For file sourcemaps
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest('dist/sass-css'));
});


gulp.task('copyFile', function () {
    gulp.src('tmp/*')
        .pipe(gulp.dest('dist/tmp/'));
});


// watch file change
gulp.task('watch', function  () {
    gulp.watch('js/*', ['script']);
});

gulp.task('default', ['script', 'watch']);
