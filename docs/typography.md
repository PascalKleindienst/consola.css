---
layout: documentation
---

## Typography

### Headings

All styles of HTML headings, `<h1>` through  `<h6>`, are also available 
as classes `.h1` through `.h6`

<div class="consola-example">
    <p>
        <span class="h1">.h1</span>
        <span class="h2">.h2</span>
        <span class="h3">.h3</span>
        <span class="h4">.h4</span>
        <span class="h5">.h5</span>
        <span class="h6">.h6</span>
    </p>
</div>

```HTML
<span class="h1">.h1</span>
<span class="h2">.h2</span>
<span class="h3">.h3</span>
<span class="h4">.h4</span>
<span class="h5">.h5</span>
<span class="h6">.h6</span>
```

### Inline text elements
#### Marked text
<div class="consola-example">
    Some <mark>marked</mark> text
</div>

```HTML
Some <mark>marked</mark> text
```

#### Deleted text
<div class="consola-example">
    Some <del>deleted</del> text
</div>

```HTML
Some <del>deleted</del> text
```

#### Strikethrough text
<div class="consola-example">
    Some <s>strikethrough</s> text
</div>

```HTML
Some <s>strikethrough</s> text
```

#### Underlined text
<div class="consola-example">
    Some <u>underlined</u> text
</div>

```HTML
Some <u>underlined</u> text
```

#### Small text
<div class="consola-example">
    Some <small>small</small> text
</div>

```HTML
Some <small>small</small> text
```

#### Bold
<div class="consola-example">
    Some <strong>bold</strong> text
</div>

```HTML
Some <strong>bold</strong> text
```

#### Italics
<div class="consola-example">
    Some <em>italicized</em> text
</div>

```HTML
Some <em>italicized</em> text
```


### Alignment classes
<div class="consola-example">
    <p class="text-left">Left aligned text.</p>
    <p class="text-center">Center aligned text.</p>
    <p class="text-right">Right aligned text.</p>
    <p class="text-justify">Justified text.</p>
    <p class="text-nowrap">No wrap text.</p>
</div>

```HTML
<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>
```


### Transformation classes
<div class="consola-example">
    <p class="text-lowercase">Lowercased text.</p>
    <p class="text-uppercase">Uppercased text.</p>
    <p class="text-capitalize">Capitalized text.</p>
</div>

```HTML
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>
```


### Lists
#### Ordered
<div class="consola-example">
    <ol>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Oranges</li>
    </ol>
</div>

```HTML
<ol>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
</ol>
```

#### Unorderd
<div class="consola-example">
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Citrus
            <ul>
                <li>Limes</li>
                <li>Oranges</li>
                <li>Grapefruit</li>
            </ul>
        </li>
    </ul>
</div>

```HTML
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Citrus
        <ul>
            <li>Limes</li>
            <li>Oranges</li>
            <li>Grapefruit</li>
        </ul>
    </li>
</ul>
```

#### Unorderd Dash
<div class="consola-example">
    <ul class="list-dash">
        <li>Apples</li>
        <li>Bananas</li>
        <li>Citrus
            <ul>
                <li>Limes</li>
                <li>Oranges</li>
                <li>Grapefruit</li>
            </ul>
        </li>
    </ul>
</div>

```HTML
<ul class="list-dash">
    <li>Apples</li>
    <li>Bananas</li>
    <li>Citrus
        <ul>
            <li>Limes</li>
            <li>Oranges</li>
            <li>Grapefruit</li>
        </ul>
    </li>
</ul>
```

#### Unstyled
<div class="consola-example">
    <ul class="list-unstyled">
        <li>Apples</li>
        <li>Bananas</li>
        <li>Oranges</li>
    </ul>
</div>

```HTML
<ul class="list-unstyled">
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
</ul>
```