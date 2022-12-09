const express = require("express");
const openAiRouter = express.Router();
const { generateImage } = require("./Controller/openAiController");

openAiRouter.get("/generateImage", generateImage);

module.exports = openAiRouter;
