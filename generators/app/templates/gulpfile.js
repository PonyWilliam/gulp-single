//压缩js
const del = require('del')
const {src,dest,series,watch} = require('gulp')
const plugins = require('gulp-load-plugins')()
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const sourceMap = require('gulp-sourcemaps')
const mock = require('./mock/mock')
function js(cb){
    src('js/*.js').pipe(plugins.uglify()).pipe(dest('./dist/js'))
    .pipe(reload({stream:true}))
    cb()
}
function css(cb){
    src('./css/*.scss')
    .pipe(sass({
        outputStyle:'compressed'
    })
    .on('error',sass.logError))
    .pipe(dest('./dist/css'))
    .pipe(sourceMap.write())
    .pipe(reload({stream:true}))
    cb()
}
function html(cb){
    src('./index.html')
    .pipe(reload({stream:true}))
    cb()
}
function watcher(cb){
    watch('./js/*.js',js)
    watch('./mock/*.js',mock)
    watch('./css/*.scss',css)
    watch('./index.html',html)
    cb()
}
function clean(cb){
    del('./dist')
    cb()
}

//server
function server(cb){
    browserSync.init({
        server:{
            baseDir:'./',
            
        },
        middleware:mock.data(),
    })
    cb()
}

exports.clean = clean
exports.scripts = js
exports.styles = css
exports.html = html
exports.server = server
exports.default = series([
    html,js,css,watcher,server
])