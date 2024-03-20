const url = "http://www.boredapi.com/api/activity";

async function generateActivity() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  document.getElementById("activity").innerHTML = data.activity;
  document.getElementById("type").innerHTML = data.type;
  document.getElementById("accessability").innerHTML =
    data.accessibility * 10 + "/10";
  document.getElementById("price").innerHTML = data.price * 10 + "/10";
  document.getElementById("participants").innerHTML = data.participants;
}

async function submitChoice() {
  let type_url = url + "?type=" + type.value;
  console.log(type_url);

  const res = await fetch(type_url);
  const data = await res.json();
  console.log("YOLO", data.type);

  document.getElementById("chosen-activity").innerHTML = data.activity;
}
