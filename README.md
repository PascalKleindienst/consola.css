# consola.css

consola.css is a lightweight CSS micro-framework for a console like style.
It is very minimalistic and has therefore a small footprint *(only **3.78 kB gzipped**)*

 It's also in SCSS and CSS and comes with a gulpfile for customizing the build.

 ## Installation
 Via bower
 ```
 $ bower install --save consola.css
 ```

Via npm
 ```
 $ npm install --save consola.css
 ```

### Using the SCSS

In your SCSS file, you can import consola.css:

```scss
@import "/path/to/consola.css/scss/consola";
```

Variables are stored in the `scss/_variables.scss` file, so they can be easily customized:
```scss
$font-size: 14px;
$red: #ff0000;

@import "/path/to/consola.css/scss/consola";
```

### Using the CSS
Just add a `<link>` in your `<head>` of either `consola.css` or 
the minified version `consola.min.css`.

## License
MIT License - Copyright (c) 2016 Pascal Kleindienst

See [LICENSE](LICENSE) for full license description

## Credits
* [Normalize](http://necolas.github.io/normalize.css) for the foundation.
* [Flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid) for the grid style.
