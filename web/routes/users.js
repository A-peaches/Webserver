var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//로그인 페이지
//router = 중계, 연결해주는 역할, 컨트롤러.
router.get('/login', function(req, res){
  res.render('index', {title:'Login', pageName:'users/login.ejs'})
});

//회원가입 페이지
router.get('/join', function(req, res){
  res.render('index', {title:'Register', pageName:'users/join.ejs'})
}); 

module.exports = router;
