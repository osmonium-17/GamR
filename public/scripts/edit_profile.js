$(document).ready(() => {
  let gameChoices = {};
  $(".game-checkbox").click((checkBoxElement) => {
    let app = checkBoxElement.target.name;
    let selected = checkBoxElement.target.checked;
    gameChoices[app] = selected;
    if (!selected) {
      delete gameChoices[app];
    }
  })
  

  let platformChoices = {};
  $(".platforms-checkbox").click((checkBoxElement) => {
    let app = checkBoxElement.target.name;
    let selected = checkBoxElement.target.checked;
    platformChoices[app] = selected;
    if (!selected) {
      delete platformChoices[app];
    }
  })

  let socialChoices = {};
  $(".socials-checkbox").click((checkBoxElement) => {
    let app = checkBoxElement.target.name;
    let selected = checkBoxElement.target.checked;
    socialChoices[app] = selected;
    if (!selected) {
      delete socialChoices[app];
    }
    console.log(socialChoices);
  })
  //game dropdown filter
  $("#game-dropdown-search").keyup(() => {
    let filter = $("#game-dropdown-search").val();
    let targets = $(".game-dropdown-element");
    for (let i = 0; i < targets.length; i++) {
      let title = targets[i].attributes.name.value;
      if (title.search(filter) == -1) {
        targets[i].style.display = "none";
      } else {
        targets[i].style.display = "";
      }
    }
  });

  //prevent dropdown close on click
  $(".dropdown-menu").click((e) => {
    e.stopPropagation();
  });

  $("#close-setup-modal").click(() => {
    $("#setup-container").css({
      filter: "blur(0px)",
    });
    $("#setupWelcomeModal").modal("hide");
  });

  let avatar = "";
  $("#image-options")
    .children()
    .click((event) => {
      $("#image-options").children().css({
        border: "none",
      });
      $(event.target).css({
        border: "2px solid red",
      });
      avatar = $(event.target).attr("src");
    });
  $("#doneApp").click(() => {
    //dropdown selection handling

    // Check for empty input fields
    if ($("#username-box").val() == "") {
      alert("Please enter a Display Name");
      return false;
    }
    if ($("#bio-box").val() == "") {
      document.getElementById("bio-box").value =
        "Hello, my name is " + $("#username-box").val();
    }
    $.ajax({
      url: "/profile/setup",
      type: "POST",
      headers: {
        "CSRF-Token": Cookies.get("XSRF-TOKEN"),
      },
      data: {
        displayName: $("#username-box").val(),
        bio: $("#bio-box").val(),
        avatar: avatar,
        playerType: $("#radio-box").val(),
        games: gameChoices,
        platforms: platformChoices,
        socials: socialChoices,
      },
      success: () => {
        window.location.assign("/main");
      },
    });
  });
  $("#cancelApp").on("click", () => {
    window.location.assign("/main");
  });
});

