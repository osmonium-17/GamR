// $("#button<%=i%>").on("click", () => {
//     let blockedUID = '<%=blocks[i].uid%>'
//     console.log(blockedUID);
//     $.ajax({
//         url: `/lobby/removeBlock`,
//         method: 'POST',
//         data: {
//             'uid': blockedUID
//         },
//         success: () => {
//             console.log("Unblock ajax success");
//             window.location = "/main";
//         },
//         error: () => {
//             console.log("Error removing user from block list - ajax");
//         }
//     });
//     $("#blockedUser<%=i%>").remove();
//     $("#button<%=i%>").remove();
// })