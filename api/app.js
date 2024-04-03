const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
var cors = require("cors");

app.use(cors()); //din locale frontend-adresse

app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
