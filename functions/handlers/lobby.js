const { db } = require("../util/admin");

exports.getSessions = (req, res) => {
  let blocks = [];
  db.collection("users")
    .doc(req.uid)
    .collection("blockedList")
    .get()
    .then((doc) => {
      doc.forEach((doc) => {
        blocks.push(doc.data());
      });
    })
    .then((doc) => {
      db.collection("lobby")
        .get()
        .then((doc) => {
          let lobbies = [];
          doc.forEach((doc) => {
            lobbies.push(doc.data());
          });
          let titleDelimited = req.params.game.split("_");
          let gameTitle = "";
          titleDelimited.forEach(title => {
            gameTitle += title.charAt(0).toUpperCase();
            gameTitle += title.slice(1);
          })
          console.log(gameTitle);
          res.render("pages/session", {
            game: gameTitle,
            status: req.status,
            avatar: req.avatar,
            lobbyArray: lobbies,
            blocks: blocks,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getLobby = (req, res) => {
  db.collection("lobby")
    .doc(req.params.lobbyID)
    .get()
    .then((doc) => {
      console.log("DSADSADASDASDADA" + doc.data())
      res.render("pages/lobby", {
        title: doc.data().title,
        numOfPlayers: doc.data().numOfPlayers,
        gameplay: doc.data().gameplay,
        console: doc.data().console,
        platform: doc.data().platform,
        description: doc.data().description,
        lobbyID: req.params.lobbyID,
        hostName: doc.data().hostName,
        hostID: doc.data().hostID,
        hostAvatar: doc.data().hostAvatar,
      });
    })
    .catch((err) => {
      console.log("Error adding session to database: " + err);
    });
};

exports.joinLobby = (req, res) => {
  db.collection("users")
    .doc(req.uid)
    .update({
      gameTitle: req.body.titleKey,
      lobbyID: req.body.lobbyKey,
    })
    .then(() => {
      db.collection("lobby")
        .doc(req.body.lobbyKey)
        .collection("members")
        .doc(req.uid)
        .set({
          memberName: req.name,
          memberID: req.uid,
          memberAvatar: req.avatar,
        })
        .then(() => {
          res.redirect("../session/chat");
        });
    })
    .catch((error) => {
      res.status(500).send("Error getting lobbyid for user: " + error)
    });
};

exports.createLobby = (req, res) => {
  db.collection("lobby")
    .doc(req.body.lobbyKey)
    .set({
      title: req.body.titleKey,
      numOfPlayers: req.body.numOfPlayersKey,
      gameplay: req.body.gameplayKey,
      console: req.body.consoleKey,
      platform: req.body.platformKey,
      description: req.body.descriptionKey,
      hostID: req.uid,
      hostName: req.name,
      lobbyID: req.body.lobbyKey,
      hostAvatar: req.body.hostAvatar,
    })
    .then(() => {
      db.collection("users")
        .doc(req.uid)
        .update({
          gameTitle: req.body.titleKey,
          lobbyID: req.body.lobbyKey,
        })
        .then(() => {
          db.collection("lobby")
            .doc(req.body.lobbyKey)
            .collection("members")
            .doc(req.uid)
            .set({
              memberName: req.name,
              memberID: req.uid,
              memberAvatar: req.avatar,
            })
            .then(() => {
              res.redirect("../session/chat");
            });
        })
        .catch((error) => {
          console.log("Error in second title submit: " + error);
        });
    })
    .catch((error) => {
      console.log("Error submitting lobby to database: " + error);
    });
};

// exports.kickUser = (req, res) => {
//     db.collection("lobby")
//       .doc(req.body.lobbyKey)
//       .collection("members")
//       .doc(req.body.userKey)
//       .delete()
//       .then(() => {
//         db.collection("lobby")
//           .doc(req.body.lobbyKey)
//           .collection("kicked")
//           .doc(req.body.userKey)
//           .set({
//             user: req.body.userKey,
//           })
//           .then(() => {
//             console.log("Successful kick of lobby member");
//             res.redirect("/chat");
//           })
//           .catch((error) => {
//             console.log("Error adding kicked user to db: " + error);
//           });
//       })
//       .catch((error) => {
//         console.log("Error kicking user: " + error);
//       });
//   }
