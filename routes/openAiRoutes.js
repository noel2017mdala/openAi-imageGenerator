const express = require("express");
const openAiRouter = express.Router();
const { generateImage } = require("./Controller/openAiController");

openAiRouter.post("/generateImage", generateImage);

module.exports = openAiRouter;
