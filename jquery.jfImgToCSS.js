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
            $element.hide();

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