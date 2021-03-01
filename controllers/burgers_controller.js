const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const allObjects = {
      burgers: data,
    };
    console.log(allObjects);
    res.render("index", allObjects);
  });
});

module.exports = router;
