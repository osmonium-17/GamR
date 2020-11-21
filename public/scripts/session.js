// Holds the images associated with specific titles to display as the session background.
let wallpaperArray = {
  Overwatch: '/images/sessionWall2.png',
  WorldOfWarcraft: '/images/wowWall.png',
  Fortnite: '/images/fortWall.png',
  Valorant: '/images/valoWall.png',
  Minecraft: '/images/mineWall.png',
  Dota2: '/images/dotaWall.png',
  Overcooked2: '/images/cookWall.png',
  Destiny2: '/images/destinyWall.png',
  LeagueofLegends: '/images/lolWall.png',
  ApexLegends: '/images/apexWall.png',
  DarkSouls: '/images/dorksouls.png',
  Mariokart8: '/images/kartWall.png',
  SuperSmashBrosUltimate: '/images/smashWall.png',
  AnimalCrossing: '/images/crossWall.png',
  Pubg: '/images/pubWall.png',
  Csgo: '/images/csWall.png'
}

// Handles the sidebar toggle action and collapses or expands it depending on the current state of the sidebar.
$(document).ready(function () {
  let x = 1;
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('h6').toggleClass('active');
    $('.fa-power-off').toggleClass('active');
    $('#containall').toggleClass('activate');
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

  // Updates the session page wallpaper
  let wallpaper = wallpaperArray[$('#gameHider').val()];
  $('body').css('background-image', 'url(' + wallpaper + ')');

  //No session handler.
  let gameCount = $('.gameSessions').length;
  if (gameCount === 0) $('#noGamePopup').css("display", "flex", "justify-content", "center");
});