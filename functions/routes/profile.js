const express = require("express");
const router = express.Router();
const auth = require("../handlers/auth");
const user = require("../handlers/users");
const assets = require("../handlers/assets");
const { db } = require("../util/admin");

router.get(
  "/",
  auth.authCheck,
  user.getUserData,
  (req, res) => {
    res.render("pages/profile", {
      titles: req.games,
      name: req.name,
      avatar: req.avatar,
      bio: req.bio,
      status: req.status,
      socials: req.socials,
      platforms: req.platforms,
    });
  }
);

router.post("/setup", auth.authCheck, assets.getTitles, assets.getAssets, user.writeUserData, (req, res) => {
  res.redirect("/main");
});

router.get(
  "/edit",
  auth.authCheck,
  assets.getAssets,
  assets.getTitles,
  (req, res) => {
    res.render("pages/editprofile", {
      socials: req.socials,
      platforms: req.platforms,
      titles: req.titles,
      uid: req.uid,
    });
  }
);

router.post("/submitedit", auth.authCheck, (req, res) => {
  db.collection("users")
    .doc(req.uid)
    .update({
      name: req.body.nameKey,
      bio: req.body.bioKey,
      avatar: req.body.avatarKey,
    })
    .then(() => {
      console.log("Stored cookie in database!");
      res.redirect("/profile");
    })
    .catch(() => {
      console.log("Error adding session to database: " + session);
    });
});

router.post("/status", auth.authCheck, user.status);

// router.get("/blockList", auth.authCheck, user.getBlockList);

// router.post("/removeBlock", auth.authCheck, user.removeBlock);

module.exports = router;
