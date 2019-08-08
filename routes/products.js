var express = require('express');
var router = express.Router();
let products = require('../productList.json');

/* GET products listing. */
router.get('/', function(req, res) {
  res.send(JSON.stringify(products));
});

/* GET one product by id */
router.get('/:id', function(req, res) {
  let id = req.params.id;
  let p = products.filter(product => product.id === +id);
  res.send(JSON.stringify(p));
});

/* PUT a different price on a single product */
router.put('/:id', function(req, res) {
  let id = req.params.id;
  let p = products.filter(product => product.id === +id);
  console.log(p);
  let updatedPrice = {
    id: p[0].id,
    name: p[0].name,
    code: p[0].code,
    price: +req.body.price,
    creator: p[0].creator,
    last_modified: p[0].last_modified
  };
  res.send(JSON.stringify(updatedPrice));
});

/* DELETE a product from the product list */
router.delete('/:id', function(req, res) {
  let id = req.params.id;
  let p = products.filter(product => product.id === +id);
  res.send(JSON.stringify(products.filter(product => product !== p[0])));
});

module.exports = router;
