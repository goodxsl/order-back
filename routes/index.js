var express = require('express');
var router = express.Router();
var dbConfig =require('../util/dbconfig')
var user=require('../controllers/usersController')
/* GET home page. */
router.get('/sendCode',user.sendCode)
router.post('/login',user.login);
router.get('/', function(req, res, next) {
  console.log('主页');
  // var sql="select * from users";
  // var sqlArr=[];
  // var callBack=(err,data)=>{
  //   if(err){
  //     console.log('连接错误');
  //   }else{
  //     res.send({
  //       'list':data
  //     })
  //   }
  // }
  // dbConfig.sqlConnect(sql,sqlArr,callBack)
  res.render('index.html');
});

module.exports = router;
