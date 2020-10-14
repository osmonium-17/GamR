$(document).ready(() => {
    $(".modal.fade:not(.in) .modal-dialog").animate({
        transform: "translate3d(0%, 0, 0)",
    })
    $(".page-container").off("click")
    $(".reportButton").on("click", () => {
        $("#reportModal").animate({
            transform: "translate3d(-50%, 0, 0)",
        })
    })
    $(".modal-closer").on("click", () => {

        // $("#reportModal").animate({
        //     left: "-100vw",
        //     opacity: "1"
        // })
    })
})