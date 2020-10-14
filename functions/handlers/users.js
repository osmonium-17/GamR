const { db } = require("../util/admin");

exports.writeUserData = (req, res, next) => {
  db.collection("users")
    .doc(req.uid)
    .set({
      name: req.body.displayName || "New Player",
      avatar:
        req.body.avatar ||
        "https://play.nintendo.com/images/profile-animalcrossing-tomnook.7bf2a8f2.aead314d58b63e27.png",
      bio: req.body.bio || "",
      socials: titleMatch(req.socials, Object.keys(req.body.socials)) || {},
      games: titleMatch(req.titles, Object.keys(req.body.games)) || {},
      platforms: titleMatch(req.platforms, Object.keys(req.body.platforms)) || {},
      email: req.email,
      playerType: req.body.playerType || "casual",
      status: req.status || "online",
    })
    .then(() => {
      next();
    })
    .catch((err) => {
      "error writing user data" + err;
    });
};

exports.getUserData = (req, res, next) => {
  if(req.isNew) {
    res.redirect("/welcome/setup");
  }
  req.isNew = true;
  db.collection("users")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.data().email == req.email) {
          req.user = doc.data();
          req.uid = doc.id || "";
          req.name = doc.data().name || "";
          req.status = doc.data().status || "";
          req.avatar = doc.data().avatar || "";
          req.bio = doc.data().bio || "";
          req.status = doc.data().status || "";
          req.socials = doc.data().socials || {};
          req.platforms = doc.data().platforms || [];
          req.games = doc.data().games || {};
          req.isNew = false;
        }
      });
      next();
    })
    .catch((err) => {
      console.log("Error getting user data", err);
      return res.status(403).json;
    });
};

exports.getGameData = (req, res, next) => {
  db.collection("titles")
    .get()
    .then((snapshot) => {
      let titles = [];
      let userTitles = req.games;
      snapshot.forEach((doc) => {
        for (const title in userTitles) {
          if (doc.data().title === title) {
            titles.push(doc.data());
          }
        }
      });
      console.log("titles" + titles);
      req.titles = titles;
    })
    .then(
      db
        .collection("assets")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.id === "platforms") {
              req.platforms = doc.data().options;
            } else if (doc.id === "socials") {
              req.socials = doc.data().options;
            }
          });
          next();
        })
        .catch((err) => "error getting platforms/socials:" + err)
    )
    .catch((err) => {
      "error getting titles: " + err;
    });
};

exports.checkNew = (req, res, next) => {
  if (req.isNew) {
    res.redirect("/welcome/setup");
  }
  next();
};

exports.updateUserData = (req, res, next) => {
  db.collection("users")
    .doc(req.uid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        if (req.body.name == undefined) req.body.name = "user";
        db.collection("users")
          .doc(req.uid)
          .update({
            email: req.email,
            session: req.cookies.__session,
            status: "online",
            avatar:
              "https://mario.nintendo.com/assets/img/home/intro/mario-pose2.png", //default avatar
            bio: `Hello I am ${req.body.name}`, //default bio
          })
          .then(() => {
            console.log("Stored cookie in database!");
            res.redirect("/setup");
            next();
          })
          .catch(() => {
            console.log("Error adding session to database: " + session);
          });
        req.avatar =
          "https://mario.nintendo.com/assets/img/home/intro/mario-pose2.png";
      }
    })
    .catch(() => {
      console.log("Error performing get on firebase firestore: ");
    });
};

exports.status = (req, res) => {
  db.collection("users")
    .doc(req.uid)
    .update({
      status: req.body.status,
    })
    .then(() => {
      res.redirect(req.body.url);
    });
};

exports.shareData = (req, res, next) => {
  if (req.uid === req.params.profileID) {
    res.redirect("/profile");
  }
  db.collection("users").doc(req.params.profileID).get().then((doc) => {
    req.profileName = doc.data().name;
    req.profileTitles = doc.data().games;
    req.profileAvatar = doc.data().avatar;
    req.profileBio = doc.data().bio;
    req.profileStatus = doc.data().status;
    req.profilePlatforms = doc.data().platforms;
    req.profileSocials = doc.data().socials;
    next();
  }).catch(err => {
    res.status(500).send("Error retrieving profile data" + err);
  })
}

// Returns objects that contain certain strings.
// @Param newObject : Object to match to stringArray
// @Param stringArray : array containing titles to match.
const titleMatch = (objectArr, stringArray) => {
  let matches = {};
  objectArr.forEach((item) => {
    if (stringArray.indexOf(item.title) >= 0) {
      matches[item.title] = item;
    }
  });
  return matches;
}

// exports.block = (req, res) => {
//   console.log(req.body.uid);
//   if (req.body.uid == req.uid) {
//     res.send("wrongful block");
//   } else {
//     db.collection("users")
//       .doc(req.uid)
//       .collection("blockedList")
//       .doc(req.body.uid)
//       .set({
//         uid: req.body.uid,
//         name: req.body.name,
//       })
//       .then(() => {
//         console.log(req.body.uid + "blocked");
//       })
//       .catch((error) => {
//         console.log("Error blocking user" + error);
//       });
//   }
// };

// exports.getBlockList = (req, res) => {
//   db.collection("users")
//     .doc(req.uid)
//     .collection("blockedList")
//     .get()
//     .then((doc) => {
//       let blocks = [];
//       doc.forEach((doc) => {
//         blocks.push(doc.data());
//       });
//       console.log(blocks);
//       res.render("pages/blockList", {
//         blocks: blocks,
//       });
//     });
// };

// exports.removeBlock = (req, res) => {
//   db.collection("users")
//     .doc(req.uid)
//     .collection("blockedList")
//     .doc(req.body.uid)
//     .delete()
//     .then(() => {
//       res.redirect("/main");
//     });
// };
