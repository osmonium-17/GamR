const express = require("express");
const router = express.Router();
const auth = require("../handlers/auth");
const user = require("../handlers/users");
const assets = require("../handlers/assets");
const { db } = require("../util/admin");

router.get("/", (req, res) => {
  if (req.cookies.__session) {
    res.redirect("/main");
  } else {
    res.redirect("/login");
  }
});

router.get("/main", auth.authCheck, user.getUserData, assets.getTitles, (req, res) => {
  res.render("pages/main", {
    status: req.status,
    avatar: req.avatar,
    titles: req.titles,
  });
});

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.post("/login", auth.login);

router.get("/logout", auth.logout, (req, res) => {
  res.render("pages/login");
});

router.get("/aboutus", auth.authCheck, (req, res) => {
  res.render("pages/aboutus");
});

router.get("/addGame", auth.authCheck, (req, res) => {
  res.render("pages/addGame");
});

router.post("/addGame", (req, res) => {
   let gameObj = req.body.gameObject;
   if (gameObj.title != "" && gameObj.coverURL != "") {
    let title = gameObj.title.trim().toLowerCase();
    let docLabel = title.replace(/ /g, "_");
    db.collection("titles")
    .doc(docLabel)
    .set({
        title : title,
        coverURL : gameObj.coverURL,
        platform : {
          pc : gameObj.platform.pc,
          ps4 : gameObj.platform.ps4,
          switch : gameObj.platform.switch,
          xbox : gameObj.platform.xbox
      }
    })
    .then(() => {
      console.log("Successful deletion of lobby member");
      res.redirect("/addGame");
    })
    .catch((error) => {
      console.log("Error in second title submit: " + error);
    });
   } else {
     res.status(418).send("I'm a teapot");
   }
   
  
});

module.exports = router;
