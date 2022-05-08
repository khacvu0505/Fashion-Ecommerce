const express = require("express");
const app = express();
const rootRouter = require("./routes");
const cors = require("cors");

// JSON PARSE
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ROUTER
app.use("/api/v1/project", rootRouter);
app.use("/", (req, res) => {
  res.send("hihi");
});

const port = process.env.PORT || 3000;

app.listen(port);
