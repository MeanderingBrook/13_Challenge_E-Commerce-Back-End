const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// GET Route requests and returns all Product Categories
router.get("/", (req, res) => {
  Category.findAll({
    include: [Product],
  }).then((category) => res.json(category));
});

// GET Route requests and returns only identified (:id) Product Category
router.get("/:id", (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [Product],
  }).then((category) => res.json(category));
});

// POST Route enables Creation of new Product Category
/*
{
  "category_name": "Underwear"
}
*/
router.post("/", (req, res) => {
  Category.create(req.body).then((category) => res.json(category));
});

// UPDATE Route enables Update of existing (:id) Product Category
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id },
  }).then((category) => res.json(category));
});

// DELETE Route enables Destruction of existing (:id) Product Category
router.delete("/:id", (req, res) => {
  Category.destroy({ where: { id: req.params.id } }).then((category) =>
    res.status(202).json(category)
  );
});

// Exports all Routes for use in other App Modules
module.exports = router;
