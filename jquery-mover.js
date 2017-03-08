(function ($, undefined) {
    $.fn.initMover = function () {
        var items = $(this).find('[data-mover-target]');
        var windowWidth = $(window).width();
        $(items).each(function (index, item) {
            //range parsing
            var range = $(item).data('mover-range').toString().split('-');
            range[0] = parseInt(range[0]) || 0;
            range[1] = parseInt(range[1]) || windowWidth;

            // action parsing
            var action = $(item).data('mover-action');

            if (windowWidth >= range[0] && windowWidth <= range[1]) {
                var element = $(item).data('mover-target');
                if (action == "before") {
                    $(item).insertBefore(element);
                } else {
                    $(item).insertAfter(element);
                }
            }
        });
        return this;
    };
}(jQuery));
