const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors());

app.get("/api", async (req, res) => {
  try {
    const { data } = await axios(
      "https://makeup-api.herokuapp.com/api/v1/products.json"
    );
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log("Aplicação rodando em: http://localhost:" + PORT);
});
