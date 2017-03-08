# jQuery-Mover
A simple jQuery plugin that moves DOM elements based on their data attributes. Useful for moving around inside DOM for responsive design, where CSS media-queries are not sufficient. Does not require any initialization parameters, all set-up is done using data attributes. Script is executed on the elements in given scope (target can be outside).

# Usage
Behavior is controlled by three data attributes:

<dl>
    <dt>data-mover-target</dt>
    <dd>CSS selector for move target DOM element. (e.g. #target)</dd>

    <dt>data-mover-range</dt>
    <dd>Window width range where the move is applied. (e.g. -500, 100-800, 900-)</dd>
    
    <dt>data-mover-action</dt>
    <dd>Specifies if we want to insert before or after target element. Default is after. (e.g. "before")</dd>
</dl>

After you have set-up the attributes, simply call initialization function from your script (ideally during document ready callback).
```javascript
$(document).ready(function(){
  $(document).initMover();
});
```

# Examples
## Simple usage
This will move element after target on screens under 700px.
```html
<div data-mover-target="#target" data-mover-range="-700">
  <p>I am moved if the screen is under 700.</p>
</div>
<div id="target">
</div>
```
## Element subset
We can call mover also only on subset of elements to better specify the context and improve execution time.
```html
<div class="moving-section">
    <div data-mover-target="#target" data-mover-range="-700">
      <p>I am moved if the screen is under 700.</p>
    </div>
    <div id="target">
    </div>
</div>
```
```javascript
$(document).ready(function(){
  $(".moving-section").initMover();
});
```

## Move before
This will move element before target on screens between 100px and 500px.
```html
<div id="target">
</div>
<div data-mover-target="#target" data-mover-range="100-500" data-mover-action="before">
  <p>I am moved if the screen is in range 100-500 before target.</p>
</div>
```
