let Ui = {


    bodyFix: function () {
        $('body').addClass('fixed');
    },

    bodyUnFix: function () {
        $('body').removeClass('fixed');
    },

    Transform: function () {
        $('body').addClass('no-transform');
    },
    NoTransform: function () {
        $('body').removeClass('no-transform');
    },

    scrollHash: function () {
        $('a.scrollHash').click(function () {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500);
            return false;
        });
    },

    newAnim: function () {
        (function ($) {
            $.fn.visible = function (partial) {

                var $t = $(this),
                    $w = $(window),
                    viewTop = $w.scrollTop(),
                    viewBottom = viewTop + $w.height(),
                    _top = $t.offset().top,
                    _bottom = _top + $t.height(),
                    compareTop = partial === true ? _bottom : _top,
                    compareBottom = partial === true ? _top : _bottom;

                return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

            };

        })(jQuery);

        var win = $(window);

        var allMods = $(".module");

        allMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("already-visible");
            }
        });

        win.scroll(function (event) {

            allMods.each(function (i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("come-in");
                }
            });

        });
    },

    showDropdown: function (event) {

        let currTarget = $(event.currentTarget)[0];
        if (prevClick != currTarget) {
            $(".custom-dropdown").removeClass("active");
        }
        $(currTarget).toggleClass("active");
        prevClick = currTarget;
        event.stopPropagation();

    },
};


export default Ui;