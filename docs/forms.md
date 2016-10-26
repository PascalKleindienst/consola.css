---
layout: documentation
---

## Forms


### Basic Example

<div class="consola-example">
    <form action="#" role="form">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name...">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="user@example.com">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="8 characters or more...">
        </div>
        <div class="form-group">
            <div class="checkbox">
                <input type="checkbox" value="" id="rememberMe">
                <label for="rememberMe">
                   Remember Me
                </label>
            </div>
        </div>
        <div class="form-group">
            <input type="submit" value="Sign In" class="btn btn-blue">
        </div>
    </form>
</div>

```html
<form role="form">
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name...">
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="user@example.com">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="8 characters or more...">
    </div>
    <div class="form-group">
        <div class="checkbox">
            <input type="checkbox" value="" id="rememberMe">
            <label for="rememberMe">
               Remember Me
            </label>
        </div>
    </div>
    <div class="form-group">
        <input type="submit" value="Sign In" class="btn btn-blue">
    </div>
</form>
```

### Horizontal form

<div class="consola-example">
    <form action="#" role="form" class="form-horizontal">
        <div class="form-group">
            <label for="name-horizontal">Name</label>
            <input type="text" class="form-control" id="name-horizontal" placeholder="Enter your name...">
        </div>
        <div class="form-group">
            <label for="email-horizontal">Email</label>
            <input type="email" class="form-control" id="email-horizontal" placeholder="user@example.com">
        </div>
        <div class="form-group">
            <label for="password-horizontal">Password</label>
            <input type="password" class="form-control" id="password-horizontal" placeholder="8 characters or more...">
        </div>
        <div class="form-group">
            <div class="checkbox">
                <input type="checkbox" value="" id="rememberMe-horizontal">
                <label for="rememberMe-horizontal">
                   Remember Me
                </label>
            </div>
        </div>
        <div class="form-group">
            <input type="submit" value="Sign In" class="btn btn-blue">
        </div>
    </form>
</div>

```html
<form role="form" class="form-horizontal">
    <div class="form-group">
        <label for="name-horizontal">Name</label>
        <input type="text" class="form-control" id="name-horizontal" placeholder="Enter your name...">
    </div>
    <div class="form-group">
        <label for="email-horizontal">Email</label>
        <input type="email" class="form-control" id="email-horizontal" placeholder="user@example.com">
    </div>
    <div class="form-group">
        <label for="password-horizontal">Password</label>
        <input type="password" class="form-control" id="password-horizontal" placeholder="8 characters or more...">
    </div>
    <div class="form-group">
        <div class="checkbox">
            <input type="checkbox" value="" id="rememberMe-horizontal">
            <label for="rememberMe-horizontal">
               Remember Me
            </label>
        </div>
    </div>
    <div class="form-group">
        <input type="submit" value="Sign In" class="btn btn-blue">
    </div>
</form>
```

### Supported Controls

#### Inputs
<div class="consola-example">
    <input type="text" class="form-control" placeholder="Text input">
</div>

```html
<input type="text" class="form-control" placeholder="Text input">
```

#### Textarea
<div class="consola-example">
    <textarea class="form-control" rows="3" placeholder="Textarea"></textarea>
</div>

```html
<textarea class="form-control" rows="3" placeholder="Textarea"></textarea>
```

#### Checkboxes and radios

##### Control on the left (default)
<div class="consola-example">
    <div class="form-group">
        <div class="checkbox">
            <input type="checkbox" value="" id="optionCheckbox-left">
            <label for="optionCheckbox-left">
                Checkbox option one 
            </label>
        </div>
        <div class="radio">
            <input type="radio" name="optionsRadios-left" id="optionsRadios1-left" value="option1" checked>
            <label for="optionsRadios1-left">
                Radio option one
            </label>
        </div>
        <div class="radio">
            <input type="radio" name="optionsRadios-left" id="optionsRadios2-left" value="option2" checked>
            <label for="optionsRadios2-left">
               Radio option two
            </label>
        </div>
    </div>
</div>

```html
<div class="checkbox">
    <input type="checkbox" value="" id="optionCheckbox-left">
    <label for="optionCheckbox-left">
        Checkbox option one 
    </label>
</div>

<div class="radio">
    <input type="radio" name="optionsRadios-left" id="optionsRadios1-left" value="option1" checked>
    <label for="optionsRadios1-left">
        Radio option one
    </label>
</div>
<div class="radio">
    <input type="radio" name="optionsRadios-left" id="optionsRadios2-left" value="option2" checked>
    <label for="optionsRadios2-left">
       Radio option two
    </label>
</div>
```

##### Control on the right
<div class="consola-example">
    <div class="form-group">
        <div class="checkbox">
            <input type="checkbox" class="control-right" value="" id="optionCheckbox-right">
            <label for="optionCheckbox-right">
                Checkbox option one 
            </label>
        </div>
        <div class="radio">
            <input type="radio" class="control-right" name="optionsRadios-right" id="optionsRadios1-right" value="option1" checked>
            <label for="optionsRadios1-right">
                Radio option one
            </label>
        </div>
        <div class="radio">
            <input type="radio" class="control-right" name="optionsRadios-right" id="optionsRadios2-right" value="option2" checked>
            <label for="optionsRadios2-right">
               Radio option two
            </label>
        </div>
    </div>
</div>

```html
<div class="checkbox">
    <input type="checkbox" class="control-right" value="" id="optionCheckbox-right">
    <label for="optionCheckbox-right">
        Checkbox option one 
    </label>
</div>

<div class="radio">
    <input type="radio" class="control-right" name="optionsRadios-right" id="optionsRadios1-right" value="option1" checked>
    <label for="optionsRadios1-right">
        Radio option one
    </label>
</div>
<div class="radio">
    <input type="radio" class="control-right" name="optionsRadios-right" id="optionsRadios2-right" value="option2" checked>
    <label for="optionsRadios2-right">
       Radio option two
    </label>
</div>
```

#### Selects

<div class="consola-example">
    <select class="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
</div>

```html
<select class="form-control">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
</select>
```


<div class="consola-example">
    <select multiple class="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
</div>

```html
<select multiple class="form-control">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
</select>
```