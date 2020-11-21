const { db } = require("../util/admin");

exports.renderChat = (req, res) => {

  let lobbyRef = db.collection("lobby").doc(req.user.lobbyID);

  lobbyRef
    .get()
    .then((doc) => {
      if (!doc.exists) res.redirect("/");
      (req.id = doc.data().hostID)
    })
    .catch((err) => console.log(err))
    .then(() => {
      lobbyRef
        .collection("members")
        .get()
        .then((doc) => {
          let memberArray = [];
          doc.forEach((member) => {
            memberArray.push(member.data());
          });
          res.render("pages/chat", {
            title: req.user.gameTitle,
            lobbyID: req.user.lobbyID,
            hostID: req.id,
            memberArray: memberArray,
            userID: req.uid,
            userName: req.name,
            userAvi: req.avatar,
          });
        })
        .catch((error) => {
          console.log("Error getting lobbyid for chat: " + error);
        });
    });
};

exports.closeChat = (req, res) => {
  db.collection("users")
    .doc(req.uid)
    .update({
      lobbyID: null,
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });

  db.collection("lobby")
    .doc(req.body.lobbyKey)
    .delete()
    .then(() => {
      console.log("Successful deletion of lobby");
      res.redirect("/main");
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log("Error in lobby deletion " + error);
    });
};

exports.leaveChat = (req, res) => {
  db.collection("users")
    .doc(req.uid)
    .update({
      lobbyID: null,
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });

  db.collection("lobby")
    .doc(req.body.lobbyKey)
    .collection("members")
    .doc(req.body.userKey)
    .delete()
    .then(() => {
      console.log("Successful deletion of lobby member");
      res.redirect("/main");
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log("Error in second title submit: " + error);
    });
};
