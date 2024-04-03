console.log("hello");

const URL = "http://localhost:3000/api/games/";

async function generateGameCards() {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);

  data.map((game) => {
    document.getElementById("game-name").innerHTML = game.name;
    document.getElementById("game-type").innerHTML = game.type;
    document.getElementById("game-year").innerHTML = game.year;
    document.getElementById("game-console").innerHTML = game.console;
    document.getElementById("game-company").innerHTML = game.company;
  });
}

function submitChoice() {
  console.log("yolo");
}

generateGameCards();

function createUser() {
  fetch("http://localhost:3000/api/newuser", {
    method: "POST",
    body: JSON.stringify({
      id: "4",
      name: "Faizan",
      username: "faizan",
      email: "mmm@mmm.no",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // title = document.getElementById("title");
      // body = document.getElementById("bd");
      // title.innerHTML = data.title;
      // body.innerHTML = data.body;
    })
    .catch((error) => console.error("Error:", error));
}
