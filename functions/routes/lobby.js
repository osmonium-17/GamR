const express = require("express");
const router = express.Router();
const auth = require("../handlers/auth");
const user = require("../handlers/users");
const lobby = require("../handlers/lobby");

router.get("/create_lobby", auth.authCheck, user.getUserData, (req, res) => {
  res.render("pages/create_lobby", {
    hostAvatar: req.avatar,
  });
});

router.post("/joinlobby", auth.authCheck, user.getUserData, lobby.joinLobby);

router.post("/submitlobby", auth.authCheck, user.getUserData, lobby.createLobby);

router.get("/:lobbyID", auth.authCheck, lobby.getLobby);

// router.post("/report", auth.authCheck, (req, res) => {
//   if (req.body.uid == req.uid) {
//     res.send("wrongful report");
//   } else {
//     db.collection("users")
//       .doc(req.body.uid)
//       .collection("reports")
//       .add({
//         type: req.body.reason,
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// });

module.exports = router;
