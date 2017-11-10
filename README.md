# jfImgToCSS
jQuery plugin designed to reload img tag sources as css background images on their parents. This enables the handy css features such as full blead images using the cover property while maintaining the img as content with alt attributes etc. for search and ease of development. 



## Script Set Up
Just follow these steps to enable:

1. Include jQuery on your page.

    ```html
    <script src="http://code.jquery.com/jquery.min.js"></script>
    ```

2. Download and include jfImgToCSS after jQuery and before its first use.

    ```html
    <script src="jquery.jfImgToCSS.js"></script>
    ```

3. Init the plugin by attaching it the img elements you want to be css background images.
    ```js
    $(".imgToCSS").jfImgToCSS();
    ```
    
## Options and Defaults
__Options__ and *Defaults*
#### Basics
* __auto:__ *'false'* If you'd prefer to set your own background css properites via traditional methods set this to true.
* __target:__ *The img element's parent* This can be changed to another element.
* __bgRepeat:__ *'no-repeat'*
* __bgSize:__ *'cover'*
* __bgPosition:__ *'center center'*
* __bgOrigin:__ *'padding-box'*
* __bgClip:__ *'border-box'*
* __bgAttachment:__ *'scroll'*
* __bgColor:__ *'transparent'*


### Options as Arguments
Options can be passed as arguments through the init function.
```js
$('.imgToCSS').jfImgToCSS({
    auto:'true',
    bgRepeat: 'no-repeat',
    bgSize: 'cover',
    bgPosition: 'center center',
    bgOrigin: 'padding-box',
    bgClip: 'border-box',
    bgAttachment: 'scroll',
    bgColor: 'transparent',
  });
```
	
### Options as Data Attributes
Options can also be passed through data attributes in the opening of the attached element. __Notice that the data attributes use dashes instead of camel case__.
```html
<img class="imgToCSS" 
    data-bg-repeat="repeat" 
    data-bg-size="100% auto" 
    data-bg-position="center" 
    alt="photo of a jungle" 
    src="images/jungle.jpg">
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


