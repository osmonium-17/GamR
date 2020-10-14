const express = require("express");
const router = express.Router();
const auth = require("../handlers/auth");
const user = require("../handlers/users");
const lobby = require("../handlers/lobby");
const chat = require("../handlers/chat");

router.get("/chat", auth.authCheck, user.getUserData, chat.renderChat);

router.post("/leaveChat", auth.authCheck, chat.leaveChat);

router.get("/profile/:profileID", auth.authCheck, user.getUserData, user.shareData, (req, res) => {
    res.render("pages/view_profile", {
      titles: req.profileTitles,
      name: req.profileName,
      avatar: req.avatar,
      profileAvatar: req.profileAvatar,
      bio: req.profileBio,
      status: req.status,
      socials: req.profileSocials,
      platforms: req.profilePlatforms,
    });
  });

router.get("/:game", auth.authCheck, user.getUserData, lobby.getSessions);

// router.post("/kickUser", auth.authCheck, lobby.kickUser);

// router.post("/block", auth.authCheck, user.block);

module.exports = router;
