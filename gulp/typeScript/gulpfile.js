const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

const transformacaoTS = () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build/minJs'))
}

exports.default = series(transformacaoTS)