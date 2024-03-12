const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(cors());
app.use(express.json());

const add = async (numberOne, numberTwo) => {
    return numberOne + numberTwo;
}

app.post("/add", async (req, res) => {
    const { numberOne, numberTwo } = req.body;
    const result = await add(numberOne, numberTwo);
    res.send({ result });
}); 

app.listen(PORT, () => {
    console.log(`Addition Service is running on port ${PORT}`);
});
