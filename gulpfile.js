var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin')
var babel = require('gulp-babel');


// Compile SASS
gulp.task('sass', () => 
    gulp.src('./src/sass/styles.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(plumber.stop())
        .pipe(gulp.dest('./app/styles/css'))
);

// Transpile
gulp.task('babel', () =>
	gulp.src('src/scripts/app.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('./app/scripts'))
);

//Optimize Images
gulp.task('imageMin', () =>
    gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/images'))
);

//Watch for changes in live development
gulp.task('watch', () =>
    gulp.watch('./src/sass/*.scss', ['sass']),
);

gulp.task('default', ['sass']);