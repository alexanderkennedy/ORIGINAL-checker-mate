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
console.log(readFile("./data/a-better-workplace.json"));

// THis is how to test a backend function without making a front end funciton that's connected to it. 



// const writeFile = (jsonData,newData) => {

//   const allJsonsData = fs.readFileSync(jsonData);
//   // I want to CHANGE allJsonsData 
//   // THen I want to save the file with the NEW allJSONS' data. 
//   return JSON.parse(allJsonData);

// }
// One idea is to make it so the writeFile changes json in the backend so you can check it
// mainListRoute.put("/list-item/:id", (req, res) => {
//  const id = req.params.id

// }

// )
const writeFile = (aBetterWorkplaceData) => {
  fs.writeFileSync(
    "./data/a-better-workplace.json",
    JSON.stringify(aBetterWorkplaceData, null, 2)
  );
};
mainListRoute.put(`/:aBetterWorkplaceID`, (req, res) => {
  console.log("request.params.aBetterWorkplaceID",req.params.aBetterWorkplaceID)
  console.log("req.body.watched",req.body.watched)
  let allJsonsData = readFile("./data/a-better-workplace.json");

  let aBetterWorkplaceToUpdate = allJsonsData.find(
    (aBetterWorkplace) => aBetterWorkplace.id === req.params.aBetterWorkplaceID
  );
  console.log("aBetterWorkplaceToUpdate",aBetterWorkplaceToUpdate)
  aBetterWorkplaceToUpdate.watched = req.body.watched;

  writeFile(allJsonsData);
  // console.log("alljsonsData",allJsonsData);
  res.status(200).json(aBetterWorkplaceToUpdate);
});



//  WITHIN the put request a single item for a single task)
// Put request Front end. 
// (Sub task within the put request) Once single row item changes "Watched" to true. Back end.

// DO NOT need individual get request Front end (optional...). 

//  Get it to write to the json

// and THEN that info would be sent BACK to the front end.
// Then set state AGAIN the page with this response.
// Setting state triggers re-render

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
