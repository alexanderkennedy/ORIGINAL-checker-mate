const { Router } = require("express");
// const { v4: uuid } = require("uuid");
const fs = require("fs");
const mainListRoute = Router();

const express = require("express");
mainListRoute.use(express.static("public"));

// const readFile = () => {
//   const aBetterWorkplaceData = fs.readFileSync(
//     "./data/a-better-workplace.json"
//   );
//   const firstAidData = fs.readFileSync(
//     "./data/first-aid.json"
//   );
//   return JSON.parse(aBetterWorkplaceData);
//   return JSON.parse(firstaidData);
// };
// parameter jsonData is relative path to data
//format: "./data/a-better-workplace.json"
const readFile = (jsonData) => {
  const allJsonsData = fs.readFileSync(jsonData);
  return JSON.parse(allJsonsData);
};
mainListRoute.get("/", (req, res) => {
  let workPlaceData = readFile("./data/a-better-workplace.json");
  let firstAidData = readFile("./data/first-aid.json");
  let fitnessData = readFile("./data/fitness.json");
  res.status(200).json({ workPlaceData, firstAidData, fitnessData });
});
// get entire a-better-workplace json list
mainListRoute.get("/a-better-workplace", (req, res) => {
  let data = readFile("./data/a-better-workplace.json");
  res.status(200).json(data);
});
// get entire first-aid json list
mainListRoute.get("/first-aid", (req, res) => {
  let data = readFile("./data/first-aid.json");
  res.status(200).json(data);
});
// get entire fitness json list
mainListRoute.get("/fitness", (req, res) => {
  let data = readFile("./data/fitness.json");
  res.status(200).json(data);
});





module.exports = mainListRoute;
