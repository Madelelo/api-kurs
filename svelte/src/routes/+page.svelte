<script>
  async function generateActivity() {
    console.log("hello world");
    const response = await fetch("https://www.boredapi.com/api/activity");
    var data = response.json();
  }

  const fetchActivity = (async () => {
    const response = await fetch("https://www.boredapi.com/api/activity");
    return await response.json();
  })();
</script>

<div class="bored-header">
  <h1>Are you bored?</h1>
  <button on:click={generateActivity}>Click for activity</button>

  <h2 id="activity">Activity</h2>
  <div class="activity-card">
    <div class="activity-info">
      <p>Type:</p>
      <p id="type"></p>
    </div>
    <div class="activity-info">
      <p>Accessability:</p>
      <p id="accessability"></p>
    </div>
    <div class="activity-info">
      <p>Costlyness:</p>
      <p id="price"></p>
    </div>
    <div class="activity-info">
      <p>Participants:</p>
      <p id="participants"></p>
    </div>
  </div>
</div>
