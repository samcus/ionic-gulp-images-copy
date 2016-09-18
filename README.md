# Images Copy Task
Copy Ionic images to build directory.

## Installation

```bash
npm install --save-dev ionic-gulp-images-copy
```

## API

### copyImages([options])

Returns a [stream](http://nodejs.org/api/stream.html) of [Vinyl files](https://github.com/wearefractal/vinyl-fs)
that can be [piped](http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options).

#### Available options:
- **src** (String|Array) Glob or array of globs ([What's a glob?](https://github.com/isaacs/node-glob#glob-primer)) matching images. Default: `'app/images/**/*.+(png|gif|jpg|jpeg|svg)'`.
- **dest** (String) Output path for the images. Default: `'www/build/images'`.

## Example

```
var copyImages = require('ionic-gulp-images-copy');

gulp.task('images', copyImages);

gulp.task('images', function(){
  return copyImages({ dest: 'www/my-custom-build-dir' });
});
```
