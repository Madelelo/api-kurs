const express = require("express");
const router = express.Router(); // Grensesnitt aka. url-er

let users = [{ name: "madde" }, { name: "edvard" }];

router.get("/users", (req, res) => {
  res.send(users);
});

router.get("/users/:name", (req, res) => {
  //Hva må man gjøre for å få brukeren madde når man skriver http://localhost:3000/api/users/madde??

  res.send("SEND inn user with name");
});

router.post("/newuser", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  console.log(users);

  res.send("New user was added to the list");
});

module.exports = router;
