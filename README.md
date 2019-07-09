# Canvas-CSS
CSS files for Canvas CMS


## Set Up
Just follow these steps to enable:

1. Add a surrounding div element around all the content with the class, dva.

    ```html
    <div class="dva">
      content goes here 
    </div>
    ```

2. Make sure all the content is inside this div.
    
## Options and Defaults



### The Options

    
### icons banners
```html
<h2 class="icon-h lesson">Lessons</h2>
<h2 class="icon-h project">Project</h2>
<h2 class="icon-h quiz">Quiz</h2>
<h2 class="icon-h post">Post</h2>
<h2 class="icon-h reply">Reply</h2>
<h2 class="icon-h respond">Respond</h2>
<h2 class="icon-h objective">Objectives & Outcomes</h2>
<h2 class="icon-h task">Task</h2>
<h2 class="icon-h submit">Submit</h2>
<h2 class="icon-h requirement">Requirements</h2>
<h2 class="icon-h assignment">Assignments</h2>
<h2 class="icon-h reading">Readings</h2>
```
### Full Bleed Video
Options can also be passed through data attributes in the opening of the attached element. __Notice that the data attributes use dashes instead of camel case__.
```html
<div class="video">
    <iframe 
    src="https://www.youtube.com/embed/_Mz228aUzq8" 
    frameborder="0" 
    allowfullscreen>
    </iframe>
</div>
```

## Public functions
There are a few public functions that can be called at any time after init.
* __destroy():__ This deactivates the plugin.
* __init():__ This initiates the plugin, this gets called automatically. 

```js
$(".imgToCSS").data("jfImgToCSS").destroy();
$(".imgToCSS").data("jfImgToCSS").init();
```

## Basic syntax
* Only works with img elements, so you need to target those.
* Make sure its parent element has some sort of width and/or height or it will collapse.

```html
<div class="column">
    <img class="imgToCSS" 
    data-bg-repeat="repeat" 
    data-bg-size="100% auto" 
    data-bg-position="center" 
    alt="photo of a jungle" 
    src="images/jungle.jpg">
</div>
```

## Credits
I used http://stefangabos.ro/jquery/jquery-plugin-boilerplate-revisited/ as a starting point for the plugin.
