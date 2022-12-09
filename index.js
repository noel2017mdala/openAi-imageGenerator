const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

require("dotenv/config");
app.use(morgan("tiny"));

const openAi = require("./routes/openAiRoutes");

// app.use("/api/v1/openAi/login", openAi);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.static(path.join(__dirname, "public")))
app.use(`${process.env.API_URL}/openAi`, openAi);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
