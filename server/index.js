const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { addName, updateName, deleteName } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.post("/names", addName);
app.put("/names", updateName);
app.delete("/names", deleteName);

app.listen(4000, () => console.log("Server running on 4000"));
