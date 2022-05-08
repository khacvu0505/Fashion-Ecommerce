const express = require("express");
const rootRouter = express.Router();
const LinkModel = require("../model/link");

rootRouter.get("/", async (req, res) => {
  let result = await LinkModel.fetchAll();
  result = result[0];
  if (result) {
    res.status(200).send({
      data: result,
      status: 200,
    });
  } else {
    res.status(400).send({
      data: "Data not found",
      status: 400,
    });
  }
});

rootRouter.post("/", async (req, res) => {
  const { link } = req.body;
  if (link) {
    const linkq = new LinkModel(link);
    linkq
      .save()
      .then(() => res.status(201).send({ message: "Create Success" }))
      .catch((err) => {
        console.log("ERROR", err);
      });
  } else {
    res.status(500).send({ message: "Data is not empty" });
  }
});

module.exports = rootRouter;
