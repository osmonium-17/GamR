const express = require("express");
const router = express.Router();
const auth = require("../handlers/auth");
const user = require("../handlers/users");
const assets = require("../handlers/assets");

router.get("/", auth.authCheck, user.getUserData, user.checkNew, assets.getTitles, (req, res) => {
  res.render("pages/main", {
    status: req.status,
    avatar: req.avatar,
    titles: req.titles,
  });
});

router.get(
  "/setup",
  auth.authCheck,
  assets.getAssets,
  assets.getTitles,
  (req, res) => {
    res.render("pages/setup", {
      socials: req.socials,
      platforms: req.platforms,
      titles: req.titles,
      uid: req.uid,
    });
  }
);

module.exports = router;
