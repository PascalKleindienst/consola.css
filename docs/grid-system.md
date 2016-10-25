---
layout: default
---

# Responsive Grid System

consola.css comes with a responsive grid system based on `display: flex;` based on http://flexboxgrid.com

## Example: Mobile and desktop

<div class="container">
    <div class="row row-example">
        <div class="col-xs-12 col-sm-6 col-md-8"><p>.col-xs-12 .col-sm-6 .col-md-8</p></div>
        <div class="col-xs-6 col-md-4"><p>.col-xs-6 .col-md-4</p></div>
    </div>
    <div class="row row-example">
        <div class="col-xs-6 col-sm-4"><p>.col-xs-6 .col-sm-4</p></div>
        <div class="col-xs-6 col-sm-4"><p>.col-xs-6 .col-sm-4</p></div>
        <div class="col-xs-6 col-sm-4"><p>.col-xs-6 .col-sm-4</p></div>
    </div>
</div>

```html
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>
        <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
    </div>
    <div class="row">
        <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
        <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
        <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
    </div>
</div>
```

## Example: Fluid container
Turn any fixed-width grid layout into a full-width layout by changing your outermost `.container` to `.container-fluid`.

```html
<div class="container-fluid">
  <div class="row">
    ...
  </div>
</div>
```
