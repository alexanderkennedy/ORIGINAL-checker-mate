const express = require("express");
const cors = require("cors");
const mainListRoute = require("./routes/mainListRoute");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/lists", mainListRoute);

app.listen(PORT, () => console.log(`🚀 server listening on port ${PORT}`));
