// Allows the user to join the lobby on button click and provides the user with lobby details for storage in user database for later use.
document.getElementById("join").onclick = function () {
  $.ajax({
    url: "/lobby/joinlobby",
    type: "POST",
    headers: {
      "CSRF-Token": Cookies.get("XSRF-TOKEN"),
    },
    data: {
      titleKey: $("#titleHidden").val(),
      lobbyKey: $("#lobby-id").val()
    },
    success: () => {
      window.location.href = "../session/chat";
    }
  });
}

// --------------------------------------------
$('.popover-dismiss').popover({
  trigger: 'focus'
})

// Holds the images associated with specific titles to display on lobby.
let preferenceArray = {
  // Game Title
  Overwatch: "/images/overwatch.png",
  Sekiro: "/images/sekiro.png",
  Fortnite: "https://pbs.twimg.com/profile_images/1229088114624344076/H3IcPDkt_400x400.jpg",

  // Gameplay
  Competitive: "/images/competitive.png",
  Casual: "/images/casual.png",

  // Console
  PC: "https://cdn.clipart.email/74e7072208fe9fcd0cbe21e18193e19a_clipcookdiarynet-pc-clipart-computer-lab-14-834-x-834-for-_834-834.png",
  PS4: "https://i.pinimg.com/originals/ca/be/7a/cabe7a7e2371300bc8efa3f19e4808a2.jpg",
  XboxOne: "https://siliconangle.com/files/2013/05/xbox-logo-square.jpg",
  Switch: "https://upload.wikimedia.org/wikipedia/commons/0/04/Nintendo_Switch_logo%2C_square.png",

  // Platform
  Discord: "https://friconix.com/jpg/fi-xnsuxl-discord-alt.jpg",
  Hangouts: "https://www.tuannguyen.tech/wp-content/uploads/2019/06/hangout-logo.png",
  Zoom: "https://www.dawsoncollege.qc.ca/information-systems-and-technology/wp-content/uploads/sites/44/zoom-logo-with-icon.jpg"
}

// Displays the appropriate tiles on the lobby page based on the lobby details at the time of creation
$(document).ready(function () {
  let gameImage1 = preferenceArray[$("#titleHidden").val()];
  let gameImage2 = preferenceArray[$("#gameplayHidden").val()];
  let gameImage3 = preferenceArray[$("#consoleHiddenf").val()];
  let gameImage4 = preferenceArray[$("#platformHidden").val()];

  $("#image-preference1").attr("src", gameImage1);
  $("#image-preference2").attr("src", gameImage2);
  $("#image-preference3").attr("src", gameImage3);
  $("#image-preference4").attr("src", gameImage4);
});