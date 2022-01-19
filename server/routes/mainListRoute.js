const { Router } = require("express");
// const { v4: uuid } = require("uuid");
const fs = require("fs");
const mainListRoute = Router();

const express = require("express");
mainListRoute.use(express.static("public"));

const readFile = () => {
  const aBetterWorkplaceData = fs.readFileSync(
    "./data/a-better-workplace.json"
  );
  return JSON.parse(aBetterWorkplaceData);
};


// get entire list
mainListRoute.get("/", (req, res) => {
  let data = readFile();
  res.status(200).json(data);
});


module.exports = mainListRoute;
