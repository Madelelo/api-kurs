const APIURL = "http://www.boredapi.com/api/activity/";

async function generateActivity() {
  const response = await fetch(APIURL); // Henter fra APIURL
  const data = await response.json(); // Gjør om responsen til JSON
  console.log(response, data);

  writeToHTML(data);
}

async function generateActivityByType(type) {
  const response = await fetch(APIURL + "?type=" + type); // Henter fra APIURL
  const data = await response.json(); // Gjør om responsen til JSON
  //console.log(response, data);

  writeToHTML(data);
}

function writeToHTML(data) {
  document.getElementById("activity").innerHTML = data.activity;
  document.getElementById("type").innerHTML = data.type;
  document.getElementById("accessability").innerHTML =
    data.accessibility * 10 + "/10";
  document.getElementById("price").innerHTML = data.price * 10 + "/10";
  document.getElementById("participants").innerHTML = data.participants;
}
