(function ($) {
    'use strict';

    $.fn.inputV = function (options) {
        var _self = this;

        var _svnBrowserUrl = 'http://google.com';
 
        var Class = {
            error: 'has-error',
            changed: 'is-changed'
        };

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            initialValue: $(this).val(),
            pattern: /.*/,
            browseEnabled: true,
            type: null,
            elem: "input", // "input" | "select"
            onClickEditPane: false, // open editor popover on click,
            validate: function () {},
            css: null
        }, options);


        if (settings.elem === 'select') {
            // TO-DO:
            $(this).replaceWith('<select class="inputV-component"><option>Testing</option></select>');

            return;
        }

        // INPUT---------------------------
        $(_self).val(settings.initialValue);

        // CSS
        if (settings.svnBrowserEnabled) {
            initSvnBrowser();
        }

        if (settings.css !== null) {
            $(_self).css(settings.css);
        }

        function initSvnBrowser() {
            var $openSvnBrowser = $('<i class="fa fa-search open-browse"></i>');
            $openSvnBrowser.click(function () {
                console.log($(_self).val());

                window.open(_svnBrowserUrl);
            });

            $(_self).after($openSvnBrowser);
        }

        // Events
        $(this).on('keyup', function () {
            console.log(settings.initialValue, $(this).val());
            _self.validatePattern();
        });

        _self.validatePattern = function () {
            var val = $(this).val();

            if (!val.match(settings.pattern)) {
                $(this).removeClass(Class.changed);
                $(this).addClass('has-error');
            } else {
                if (val !== settings.initialValue) {
                    $(this).removeClass(Class.error);
                    $(this).addClass(Class.changed);
                } else {
                    $(this).removeClass(Class.error);
                    $(this).removeClass(Class.changed);
                }
            }
        };

        _self.val = function () {
            return ('Value: ' + $(_self).val());
        };

        _self.validate = settings.validate;

        return _self;
    };

})(jQuery);