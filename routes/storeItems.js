const express = require("express");
const items = express.Router();


const Item = require("../models/storeItem");

items.route("/addItem").post((req, res) => {
  const item ={
    item_name: req.body.item_name,
    item_price: req.body.item_price,
    item_category: req.body.item_category,
    item_quantity:req.body.item_quantity ,
  };

  Item
    .create(item)
    .then((item) => {
      res
        .status(200)
        .send({ item: `${item.item_name} added successfully` });
    })
    .catch((err) => {
      res.status(400).send("Unable to save "+ err);
    });;
});

items.route("/items").get((req, res) => {
  Item.find((err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.json(item);
    }
  });
});

items.route("/delete/:id").get((req, res) => {
  Item.findByIdAndRemove({ _id: req.params.id }, (err, item) => {
    if (err) {
        res.json(err);
    }
    else{
        res.json("Successfully remove")
    }
  });
});

module.exports = items;
