var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'Book Search', pageName:'books/search.ejs'});
});

router.get('/cart', function(req, res) {
  res.render('index', { title:'Cart', pageName:'books/cart.ejs'});
});

module.exports = router;

//이동할땐 get 받아올땐 post, 페이지출력시 rend 메소드사용