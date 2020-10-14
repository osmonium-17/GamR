let x = 1;
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('h6').toggleClass('active');
        $('.fa-power-off').toggleClass('active');
        $('#containall').toggleClass('activate');
        $('#gametitle-space').toggleClass('activate');
        if (x == 1) {
            $('#toggleicon').removeClass('fa-angle-double-left');
            $('#toggleicon').addClass('fa-angle-double-right');
            x++;
        } else {
            $('#toggleicon').removeClass('fa-angle-double-right');
            $('#toggleicon').addClass('fa-angle-double-left');
            x--;
        }
    });

    $("#gametitle-space").children('img').click(function () {
        location.href = "/session";
    });
    $(".carousel-item").children('img').click(function () {
        location.href = "/session";
    });
});
$('.carousel').carousel();

// Firebase logout
$("#logoutButton").on("click", () => {
    $.ajax({
        url: '/logout',
        type: 'GET',
      });
})