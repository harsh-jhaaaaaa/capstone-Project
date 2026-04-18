const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/cars", (req, res) => {
  db.query("SELECT * FROM Cars", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/book", (req, res) => {
  const { name, car_id } = req.body;

  db.query(
    "INSERT INTO Customers(name) VALUES(?)",
    [name],
    (err, result) => {
      if (err) throw err;
      res.send("Booked Successfully");
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
