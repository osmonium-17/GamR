const { db } = require("../util/admin");

exports.getAssets = (req, res, next) => {
  let platforms;
  let socials;
  let generalAssets;
  db.collection("assets")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        
        if (doc.id === "platforms") {
          platforms = doc.data().options;
        } else if (doc.id === "socials") {
          socials = doc.data().options;
        } else {
          generalAssets.push(doc.data());
        }
      });
      req.platforms = platforms;
      req.socials = socials;
      req.assets = generalAssets;
      next();
    })
    .catch((err) => res.send("Error retrieving Assets").status(500));
};

exports.getTitles = (req, res, next) => {
  let titles = [];
  db.collection("titles")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        titles.push(doc.data());
      });
      req.titles = titles;
      next();
    })
    .catch((err) => res.send("Error retrieving Titles").status(500));
};
