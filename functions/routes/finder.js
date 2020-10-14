const express = require("express");
const router = express.Router();
const auth = require("../handlers/auth");
const user = require("../handlers/users");

router.get("/", auth.authCheck, user.getUserData, (req, res) => {
  db.collection("users").get();
  res.render("pages/find-player", {
    userID: req.uid,
    userName: req.name,
    avatar: req.avatar,
    status: req.status,
  });
});

module.exports = router;
