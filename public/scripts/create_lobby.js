// CLOSE function
document.getElementById("close").onclick = function () {
    location.href = "/main";
};

// Game Title function - Desktop view
document.getElementById("overwatch").onclick = function () {
    document.getElementById("text-other1").value = "Overwatch";
};
document.getElementById("sekiro").onclick = function () {
    document.getElementById("text-other1").value = "Sekiro";
};
document.getElementById("fortnite").onclick = function () {
    document.getElementById("text-other1").value = "Fortnite";
};
document.getElementById("valorant").onclick = function () {
    document.getElementById("text-other1").value = "Valorant";
};
document.getElementById("minecraft").onclick = function () {
    document.getElementById("text-other1").value = "Minecraft";
};
document.getElementById("WoW").onclick = function () {
    document.getElementById("text-other1").value = "WorldofWarcraft";
};
document.getElementById("dota2").onclick = function () {
    document.getElementById("text-other1").value = "Dota2";
};
document.getElementById("overcooked2").onclick = function () {
    document.getElementById("text-other1").value = "Overcooked2";
};
document.getElementById("destiny2").onclick = function () {
    document.getElementById("text-other1").value = "Destiny2";
};
document.getElementById("LoL").onclick = function () {
    document.getElementById("text-other1").value = "LeagueofLegends";
};
document.getElementById("apex").onclick = function () {
    document.getElementById("text-other1").value = "ApexLegends";
};
document.getElementById("darksoul").onclick = function () {
    document.getElementById("text-other1").value = "DarkSouls";
};
document.getElementById("mariokart").onclick = function () {
    document.getElementById("text-other1").value = "Mariokart8";
};
document.getElementById("superSmashBros").onclick = function () {
    document.getElementById("text-other1").value = "SuperSmashBrosUltimate";
};
document.getElementById("animalCrossing").onclick = function () {
    document.getElementById("text-other1").value = "AnimalCrossing";
};
document.getElementById("pubg").onclick = function () {
    document.getElementById("text-other1").value = "PUBG";
};
document.getElementById("csgo").onclick = function () {
    document.getElementById("text-other1").value = "CSGO";
};
document.getElementById("botw").onclick = function () {
    document.getElementById("text-other1").value = "ZeldaBreathoftheWild";
};

// Game Title function - Tablet/Mobile view
document.getElementById("overwatch1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "Overwatch";
};
document.getElementById("sekiro1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "Sekiro";
};
document.getElementById("fortnite1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "Fortnite";
};
document.getElementById("valorant1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "Valorant";
};
document.getElementById("minecraft1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "Minecraft";
};
document.getElementById("WoW1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "WorldofWarcraft";
};
document.getElementById("dota2-1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "Dota2";
};
document.getElementById("overcooked2-1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "Overcooked2";
};
document.getElementById("destiny2-1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "Destiny2";
};
document.getElementById("LoL1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "LeagueofLegends";
};
document.getElementById("apex1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "ApexLegends";
};
document.getElementById("darksoul1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "DarkSouls";
};
document.getElementById("mariokart1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "Mariokart8";
};
document.getElementById("superSmashBros1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "SuperSmashBrosUltimate";
};
document.getElementById("animalCrossing1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "AnimalCrossing";
};
document.getElementById("pubg1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "PUBG";
};
document.getElementById("csgo1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "CSGO";
};
document.getElementById("botw1-2").onclick = function () {
    document.getElementById("text-other1-2").value = "ZeldaBreathoftheWild";
};

// Number of Players function
document.getElementById("two").onclick = function () {
    document.getElementById("text-other2").value = "2";
};
document.getElementById("three").onclick = function () {
    document.getElementById("text-other2").value = "3";
};
document.getElementById("four").onclick = function () {
    document.getElementById("text-other2").value = "4";
};
document.getElementById("five").onclick = function () {
    document.getElementById("text-other2").value = "5";
};
document.getElementById("other2").onclick = function () {
    document.getElementById("text-other2").value = "Please specify here";
};

// Gameplay Type function
let gameplay = "";
$("#button-gameplay-type")
    .children()
    .click((event) => {
        $("#button-gameplay-type").children().css({
            "background-color": "rgb(108,117,125)",
            border: "none",
        });
        $(event.target).css({
            "background-color": "rgb(64,68,75)",
            border: "2px solid rgb(64,68,75)",
        });
        gameplay = $(event.target).val();
    });

// Consol Type function
let consol = "";
$("#button-console-type")
    .children()
    .click((event) => {
        $("#button-console-type").children().css({
            "background-color": "rgb(108,117,125)",
            border: "none",
        });
        $(event.target).css({
            "background-color": "rgb(64,68,75)",
            border: "2px solid rgb(64,68,75)",
        });
        consol = $(event.target).val();
    });

// Platform function
let platform = "";
$("#button-platform-type")
    .children()
    .click((event) => {
        $("#button-platform-type").children().css({
            "background-color": "rgb(108,117,125)",
            border: "none",
        });
        $(event.target).css({
            "background-color": "rgb(64,68,75)",
            border: "2px solid rgb(64,68,75)",
        });
        platform = $(event.target).val();
    });

// CANCEL function
document.getElementById("cancel").onclick = function () {
    location.href = "/main";
};

// CREATE function
$("#create").click(() => {
    let output = "";
    if ($("#text-other1").val()) {
        output = $("#text-other1").val();
    } else {
        output = $("#text-other1-2").val();
    }
    // Check for empty input fields
    if (
        ($("#text-other1").val() == "" && $("#text-other1-2").val() == "") ||
        $("#text-other2").val() == "" ||
        $("#text-other2").val() == "Please specify here" ||
        gameplay == "" ||
        consol == "" ||
        platform == "" ||
        $("#text-other5").val() == "" ||
        $("#text-other5").val() == "Please specify here"
    ) {
        alert("All fields must be filled in");
        return false;
    }

    let generatedID = "A" + Math.round(Math.random() * 999999999) + "B";
    let avi = $("#host-avatar-hidden").val();
    $.ajax({
        url: "/lobby/submitlobby",
        type: "POST",
        headers: {
            'CSRF-Token': Cookies.get("XSRF-TOKEN")
        },
        data: {
            titleKey: output,
            numOfPlayersKey: $("#text-other2").val(),
            gameplayKey: gameplay,
            consoleKey: consol,
            platformKey: platform,
            descriptionKey: $("#text-other5").val(),
            lobbyKey: generatedID,
            hostAvatar: avi,
        },
        success: () => {
            window.location.assign("../session/chat");
        },
    });
});