// Handles the sidebar toggle action and collapses or expands it depending on the current state of the sidebar.
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
});

// Runs the carousel function to have it change automatically between slides.
$('.carousel').carousel();


// ----------------------------------------------------------
$("#logoutButton").on("click", () => {
  $.removeCookie("__session");
})

/* 
Easter egg function that is activiated by clicking on chat icon at the top right of the page followed by
clicking on the GamR logo at the top left of the page. 
*/
const EGGDELAY = 20000;
$("#egg").on("click", () => {

  // Redirects user to active chat, warns user if no chat session active
  $.ajax({
    url: "/session/currentChat",
    method: "POST",
    credentials: "same-origin",
    headers: {
      "CSRF-Token" : Cookies.get("XSRF-TOKEN"),
    },
    success: (response) => {
      window.location = "/session/chat";
    },
    error: (response, status) => {
      window.alert("You are not in an active chat")
    }
  })

  $("#team-logo").on("click", () => {
    $("body").addClass("egg");
    $("#egg1").attr("src", "images/travolta.webp");
    $("#egg2").attr("src", "images/travolta.webp");
    $("#egg3").attr("src", "images/travolta.webp");
    $("#egg4").attr("src", "images/travolta.webp");
    $("#egg1, #egg2, #egg3, #egg4").css("height", "50%");
    setTimeout(() => {
      $("body").removeClass("egg");
      $("#egg1, #egg2, #egg3, #egg4").css("height", "50vh");
      $("#egg1").attr("src",
        "https://i.pinimg.com/originals/96/a1/e7/96a1e76de3ea8ac56df3bc4939a25253.jpg"
      );
      $("#egg2").attr("src", "https://i.redd.it/kpdoblsdkd8z.png");
      $("#egg3").attr("src", "https://wallpaperaccess.com/full/211266.jpg");
      $("#egg4").attr("src",
        "https://pixelz.cc/wp-content/uploads/2018/08/assassins-creed-brotherhood-dual-monitor-wallpaper.jpg"
      );
    }, EGGDELAY);
  })
})