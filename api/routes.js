const express = require("express");

const router = express.Router();

// "Fake" database
const games = [
  {
    name: "The Legend of Zelda: Breath of the Wild",
    year: 2017,
    id: 1,
    company: "Nintendo",
    type: "Action-adventure",
    console: ["Nintendo Switch", "Wii U"],
  },
  {
    name: "The Witcher 3: Wild Hunt",
    year: 2015,
    id: 2,
    company: "CD Projekt",
    type: "Action role-playing",
    console: [
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "Microsoft Windows",
    ],
  },

  {
    name: "Baldur's Gate 3",
    year: 2020,
    id: 3,
    company: "Larian Studios",
    type: "Role-playing",
    console: ["Microsoft Windows", "Stadia"],
  },
  {
    name: "It Takes Two",
    year: 2021,
    id: 4,
    company: "Hazelight Studios",
    type: "Action-adventure, platformer, cooperative",
    console: [
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Microsoft Windows",
    ],
  },
];

const users = [
  { id: "1", name: "Madeleine", username: "madelelo", email: "mmm@mmm.no" },
  { id: "2", name: "Magnus", username: "magnus", email: "mmm@mmm.no" },
  { id: "3", name: "Mathias", username: "mathias", email: "mmm@mmm.no" },
];

// Define routes
router.get("/users", (req, res) => {
  res.send(users);
});

router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  let user = users.filter((x) => x.id === userId);
  res.send(user);
});

router.get("/games", (req, res) => {
  res.send(games);
});

router.post("/newgame", (req, res) => {
  const newGame = req.body.newGame;
  games.push(newGame);
  console.log(games);

  res.send({
    message: "New game was added to the list",
  });
});

module.exports = router;
