(function($) {
    $.jfImgToCSS = function(element, options) {
        var plugin = this;
        var $element = $(element);
        var dataatts = $element.data();
        var imgpath = $element.attr('src');

        var defaults = {
            auto: true,
            target: $element.parent(),
            bgRepeat: 'no-repeat',
            bgSize: 'cover',
            bgPosition: 'center center',
            bgOrigin: 'padding-box',
            bgClip: 'border-box',
            bgAttachment: 'scroll',
            bgColor: 'transparent',
        };
        plugin.settings = {};

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options, dataatts);
            
            // position off screen for screen readers
            $element.css({
                'position':'absolute',
                'top':'auto',
                'left':'-10000px',
                'height':'10px',
                'width':'10px',
            });

            var $target = $(plugin.settings.target);
            $target.css({
                    'background-image': 'url('+imgpath+')',
                });
            if (plugin.settings.auto){
                $target.css({
                    'background-repeat': plugin.settings.bgRepeat,
                    'background-size': plugin.settings.bgSize,
                    'background-position': plugin.settings.bgPosition,
                    'background-origin': plugin.settings.bgPosition,
                    'background-clip': plugin.settings.bgClip,
                    'background-attachment': plugin.settings.bgAttachment,
                    'background-color': plugin.settings.bgColor,
                    
                    '-moz-background-repeat': plugin.settings.bgRepeat,
                    '-moz-background-size': plugin.settings.bgSize,
                    '-moz-background-position': plugin.settings.bgPosition,
                    '-moz-background-origin': plugin.settings.bgPosition,
                    '-moz-background-clip': plugin.settings.bgClip,
                    '-moz-background-attachment': plugin.settings.bgAttachment,
                    '-moz-background-color': plugin.settings.bgColor,
                    
                    '-webkit-background-repeat': plugin.settings.bgRepeat,
                    '-webkit-background-size': plugin.settings.bgSize,
                    '-webkit-background-position': plugin.settings.bgPosition,
                    '-webkit-background-origin': plugin.settings.bgPosition,
                    '-webkit-background-clip': plugin.settings.bgClip,
                    '-webkit-background-attachment': plugin.settings.bgAttachment,
                    '-webkit-background-color': plugin.settings.bgColor,
                    
                    '-ms-background-repeat': plugin.settings.bgRepeat,
                    '-ms-background-size': plugin.settings.bgSize,
                    '-ms-background-position': plugin.settings.bgPosition,
                    '-ms-background-origin': plugin.settings.bgPosition,
                    '-ms-background-clip': plugin.settings.bgClip,
                    '-ms-background-attachment': plugin.settings.bgAttachment,
                    '-ms-background-color': plugin.settings.bgColor,

                    '-o-background-repeat': plugin.settings.bgRepeat,
                    '-o-background-size': plugin.settings.bgSize,
                    '-o-background-position': plugin.settings.bgPosition,
                    '-o-background-origin': plugin.settings.bgPosition,
                    '-o-background-clip': plugin.settings.bgClip,
                    '-o-background-attachment': plugin.settings.bgAttachment,
                    '-o-background-color': plugin.settings.bgColor,
                });
            }
        };

        plugin.destroy = function() {
            $element.removeData('jfImgToCSS', plugin);
            plugin = null;
        };
        plugin.init();
    };

    $.fn.jfImgToCSS = function(options) {
        return this.each(function() {
            if (undefined === $(this).data('jfImgToCSS')) {
                var plugin = new $.jfImgToCSS(this, options);
                $(this).data('jfImgToCSS', plugin);
            }
        });
    };
})(jQuery);