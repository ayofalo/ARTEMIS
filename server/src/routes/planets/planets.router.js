const express = require("express");

const { getAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/planets", getAllPlanets);
console.log("router working");
module.exports = planetsRouter;