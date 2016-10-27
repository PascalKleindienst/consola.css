---
layout: documentation
---

## Installation
Via bower
```Bash
$ bower install --save consola.css
```

Via npm
```Bash
$ npm install --save consola.css
```

Via git
```Bash
$ git clone git@github.com:PascalKleindienst/consola.css.git
```

## Customization
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