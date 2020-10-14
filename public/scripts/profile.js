// Handles the sidebar toggle action and collapses or expands it depending on the current state of the sidebar.
let x = 1;
$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('h6').toggleClass('active');
    $('.fa-power-off').toggleClass('active');
    $('#containall').toggleClass('activate');
    $('#gametitle-space').toggleClass('activate');
    $('#playerProfile-space').toggleClass('activate');
    $('#profile-Tilespace').toggleClass('activate');
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
});
// $('#backToMain2').attr('href', `/welcome/${localStorage.getItem('gamR-token')}`);

// Allows the user to redirect to the edit profile page from the user profile
$('#edit-profile-btn').on('click', () => {
  window.location.assign('/profile/edit');
});