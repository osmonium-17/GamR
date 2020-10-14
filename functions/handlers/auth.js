const { admin, db } = require("../util/admin");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(cookieParser());

exports.authCheck = (req, res, next) => {
  const sessionCookie = req.cookies.__session || "";
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /* checkRevoked */)
    .then((decodedToken) => {
      req.uid = decodedToken.uid;
      req.name = decodedToken.name;
      req.email = decodedToken.email;
      return next();
    })
    .catch((error) => {
        console.log(error);
      res.redirect("/logout");
    });
};

exports.login = (req, res) => {
  const idToken = req.body.token.toString();
  const expiresIn = 60 * 60 * 24 * 1000;
  admin
    .auth()
    .createSessionCookie(idToken, {
      expiresIn,
    })
    .then(
      (sessionCookie) => {
        const options = {
          maxAge: expiresIn,
          httpOnly: true,
        };
        res.setHeader("Cache-Control", "private");
        res.cookie("__session", sessionCookie, options);
        res.end(
          JSON.stringify({
            status: "success",
          })
        );
      },
      (error) => {
        res.status(401).send("UNAUTHORIZED");
      }
    );
};

// exports.signup = 

exports.logout = (req, res) => {
  res.clearCookie("__session");
  res.redirect("/login");
};
