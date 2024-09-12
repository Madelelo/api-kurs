console.log("yolo");

const API_URL = "http://www.boredapi.com/api/activity/";

async function getRandomActivity() {
  const response = await fetch(API_URL);
  const data = await response.json();

  console.log(response, data);
}

getRandomActivity();
