const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use((req, res, next) => {
  if (req.method === "POST") {
    next();
  } else {
    res.status(400).json({
      msg: `${req.method} are not allowed`,
    });
  }
});
app.post("/shivam", (req, res) => {
  res.status(200).json({ msg: "hi" + " " + req.body.name, method: req.method });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
