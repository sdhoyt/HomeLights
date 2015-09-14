var toggleOutlet = function(buttonClicked) {
    $.post('toggle.php', {
            outletId: buttonClicked.attr('data-outletId'),
            outletStatus: buttonClicked.attr('data-outletStatus'),
            minutes: buttonClicked.attr('data-minutes')
        },
        function(data, status) {
            //alert('Outlet toggled!');
        });

};


$(function() {
    $('.toggleOutlet').click(function() {
        toggleOutlet($(this));
    });
});