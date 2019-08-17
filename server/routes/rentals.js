const express = require("express");
const router = express.Router();
const Rental = require("../models/rental");

router.get("/", (req, res) => {
  //find all rental in database
  Rental.find({}, (err, rentals) => {
    res.json(rentals);
  });
});

router.get("/:id", (req, res) => {
  const rentalId = req.params.id;

  Rental.findById(rentalId, (err, rental) => {
    if (err) {
      res.status(422).send({
        errors: [{ title: "Rental Error", detail: "could not find rentals" }]
      });
    }
    res.json(rental);
  });
});

module.exports = router;
