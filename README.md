# Canvas-CSS
Maryville Design & Visual Art Program's CSS files for Canvas CMS  

## Set Up
Just follow these steps to enable:

1. Add a surrounding div element around all the content with the class, dva.

    ```html
    <div class="dva">
      content goes here 
    </div>
    ```

2. Make sure all the content is inside this div.
    
## The Options
 
### Banners
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

