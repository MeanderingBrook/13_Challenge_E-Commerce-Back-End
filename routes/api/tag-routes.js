const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// GET Route requests and returns all Product Tags
router.get("/", (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  }).then((tag) => res.json(tag));
});

// GET Route requests and returns only identified (:id) Product Tag
router.get("/:id", (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  }).then((tag) => res.json(tag));
});

// POST Route enables Creation of new Product Tag
/*
{
    "tag_name": "fine art"
}
*/
router.post("/", (req, res) => {
  Tag.create(req.body).then((tag) => res.json(tag));
});

// UPDATE Route enables Update of existing (:id) Product Tag
router.put("/:id", (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } }).then((tag) =>
    res.json(tag)
  );
});

// DELETE Route enables Destruction of existing (:id) Product Tag
router.delete("/:id", (req, res) => {
  Tag.destroy({ where: { id: req.params.id } }).then((tag) => res.json(tag));
});

// Exports all Routes for use in other App Modules
module.exports = router;
