(function($) {
    $.jfImageCover = function(element, options) {
        var plugin = this;
        var $element = $(element);
        var dataatts = $element.data();
        var imgpath = $element.attr('src');

        var defaults = {
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
                'background-repeat': plugin.settings.bgRepeat,
                'background-size': plugin.settings.bgSize,
                'background-position': plugin.settings.bgPosition,
                'background-origin': plugin.settings.bgPosition,
                'background-clip': plugin.settings.bgClip,
                'background-attachment': plugin.settings.bgAttachment,
                'background-color': plugin.settings.bgColor,
            });
        };

        plugin.destroy = function() {
            $element.removeData('jfImageCover', plugin);
            plugin = null;
        };
        plugin.init();
    };

    $.fn.jfImageCover = function(options) {
        return this.each(function() {
            if (undefined === $(this).data('jfImageCover')) {
                var plugin = new $.jfImageCover(this, options);
                $(this).data('jfImageCover', plugin);
            }
        });
    };
})(jQuery);