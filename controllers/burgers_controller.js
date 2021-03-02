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

router.post("/api/burgers", (req, res) => {
  console.log(req.body.burger_name);
  burger.insertOne(["burger_name"], [req.body.burger_name], (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const status = `id = ${req.params.id}`;
});
module.exports = router;
