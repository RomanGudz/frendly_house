import gulp from 'gulp';
import browserSync from 'browser-sync';
import cssimport from 'gulp-cssimport';
import { deleteAsync } from 'del';

export const html = () => gulp.src('src/*.html')
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream());

export const css = () => gulp.src('src/style/index.css')
  .pipe(cssimport({
    extensions: ['css'],
  }))
  .pipe(gulp.dest('dist/style'))
  .pipe(browserSync.stream());

export const js = () => gulp.src('src/js/**/*.js')
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.stream());

export const copy = () => gulp.src([
  'src/fonts/**/*',
  'src/img/**/*'
])
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream({
    once: true
  }));

export const server = () => {
  browserSync.init({
    ui: false,
    notify: false,
    // tunnel: true,
    server: {
      baseDir: 'dist'
    }
  })

  gulp.watch('./src/**/*.html', html);
  gulp.watch('./src/style/**/*.css', css);
  gulp.watch('./src/js/**/*.js', js);
  gulp.watch(['./src/img/**/*', './src/fonts/**/*'], copy);
};

export const clear = (done) => {

  deleteAsync(['dist'], {
    force: true,
  });
  done();
};

export const base = gulp.parallel(html, css, copy);
export const build = gulp.series(clear, base);

export default gulp.series(
  base,
  server
);