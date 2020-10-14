$(document).ready(function () {

    let status = $("#statusbox").attr("name");

    if (status == "online") {
        $("#statusbox").css("background-color", "lime");
    } else if (status == "away") {
        $("#statusbox").css("background-color", "yellow");
    } else if (status == "busy") {
        $("#statusbox").css("background-color", "red");
    }
    console.log(status);

    // Pressing the online option in the status drop down applies the status and POSTs the new status to the user database for persistence.
    $('#onlineplayer').click(function () {
        $("#statusbox").css("background-color", "lime");
        $.ajax({
            url: `/profile/status`,
            method: 'POST',
            data: {
                'status': 'online'
            },
            success: () => {
                console.log("GOT TO SUCCESS");
            },
            error: () => {
                console.log("ERROR IN AJAX P1");
            }
        });
    });

    // Pressing the away option in the status drop down applies the status and POSTs the new status to the user database for persistence.
    $('#awayplayer').click(function () {
        $("#statusbox").css("background-color", "yellow");
        $.ajax({
            url: `/profile/status`,
            method: 'POST',
            data: {
                'status': 'away'
            },
            success: () => {
                console.log("GOT TO SUCCESS");
            },
            error: () => {
                console.log("ERROR IN AJAX P1");
            }
        });
    });

    // Pressing the do not disturb option in the status drop down applies the status and POSTs the new status to the user database for persistence.
    $('#dndplayer').click(function () {
        $("#statusbox").css("background-color", "red");
        $.ajax({
            url: `/profile/status`,
            method: 'POST',
            data: {
                'status': 'busy'
            },
            success: () => {
                console.log("GOT TO SUCCESS");
                window.location = "/main";
            },
            error: () => {
                console.log("ERROR IN AJAX P1");
            }
        });
    });
});