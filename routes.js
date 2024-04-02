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
    name: "Grand Theft Auto V",
    year: 2013,
    id: 3,
    company: "Rockstar Games",
    type: "Action-adventure, open world",
    console: [
      "PlayStation 3",
      "PlayStation 4",
      "Xbox 360",
      "Xbox One",
      "Microsoft Windows",
    ],
  },
  {
    name: "Fortnite",
    year: 2017,
    id: 4,
    company: "Epic Games",
    type: "Battle royale, sandbox",
    console: [
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
      "Android",
      "iOS",
      "Microsoft Windows",
    ],
  },
  {
    name: "Overwatch",
    year: 2016,
    id: 5,
    company: "Blizzard Entertainment",
    type: "First-person shooter",
    console: [
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "Microsoft Windows",
    ],
  },
  {
    name: "Minecraft",
    year: 2011,
    id: 6,
    company: "Mojang Studios",
    type: "Sandbox, survival",
    console: [
      "PlayStation 3",
      "PlayStation 4",
      "Xbox 360",
      "Xbox One",
      "Nintendo Switch",
      "Wii U",
      "Android",
      "iOS",
      "Microsoft Windows",
    ],
  },
  {
    name: "Red Dead Redemption 2",
    year: 2018,
    id: 7,
    company: "Rockstar Games",
    type: "Action-adventure",
    console: [
      "PlayStation 4",
      "Xbox One",
      "Microsoft Windows",
      "Google Stadia",
    ],
  },
  {
    name: "Super Mario Odyssey",
    year: 2017,
    id: 8,
    company: "Nintendo",
    type: "Platformer",
    console: ["Nintendo Switch"],
  },
  {
    name: "League of Legends",
    year: 2009,
    id: 9,
    company: "Riot Games",
    type: "Multiplayer online battle arena (MOBA)",
    console: ["Microsoft Windows"],
  },
  {
    name: "Call of Duty: Modern Warfare",
    year: 2019,
    id: 10,
    company: "Activision",
    type: "First-person shooter",
    console: ["PlayStation 4", "Xbox One", "Microsoft Windows"],
  },
  {
    name: "Baldur's Gate 3",
    year: 2020,
    id: 11,
    company: "Larian Studios",
    type: "Role-playing",
    console: ["Microsoft Windows", "Stadia"],
  },
  {
    name: "It Takes Two",
    year: 2021,
    id: 12,
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

router.post("/newuser", (req, res) => {
  const newUserdata = req.body;
  users.push(newUserdata);
  console.log(users);

  res.send({
    message: "New user was added to the list",
  });
});

router.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Update user ${userId}`);
});

router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Delete user ${userId}`);
});

module.exports = router;
