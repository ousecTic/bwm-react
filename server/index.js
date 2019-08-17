const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");
const Rental = require("./models/rental");
const cors = require("cors");

//routes

const rentalRoutes = require("./routes/rentals");

//fake database
const FakeDb = require("./fake-db");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

mongoose
  .connect(config.DB_URI, { useNewUrlParser: true }, () => {
    console.log("database is connected");
  })
  .then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  })
  .catch(err => {
    console.log(err);
  });

app.use("/api/v1/rentals", rentalRoutes);

app.listen(PORT, () => {
  console.log("Server has started");
});
