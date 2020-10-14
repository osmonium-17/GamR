const functions = require("firebase-functions");
const express = require("express");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
const csrfMiddleware = csrf({ cookie: true });
// app.use(csrfMiddleware);
// app.all("*", (req, res, next) => {
//   res.cookie("XSRF-TOKEN", req.csrfToken());
//   next();
// });


const indexRouter = require("./routes/index");
const profileRouter = require("./routes/profile");
const lobbyRouter = require("./routes/lobby")
const welcomeRouter = require("./routes/welcome");
const sessionRouter = require("./routes/session");
const finderRouter = require("./routes/finder");

app.use("/", indexRouter);
app.use("/profile", profileRouter);
app.use("/lobby", lobbyRouter);
app.use("/welcome", welcomeRouter);
app.use("/session", sessionRouter);
app.use("/finder", finderRouter);

// Exports entire express app as single firebase function
exports.app = functions.https.onRequest(app);

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Note: You will edit this file in the follow up codelab about the Cloud Functions for Firebase.
