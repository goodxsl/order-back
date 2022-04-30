var express = require('express');
var router = express.Router();
// var user=require('../controllers/usersController')
var order=require('../controllers/orderController')
/* GET users listing. */
router.post('/', order.addOrder);
// router.get('/getPostUser', user.getPostUser);
module.exports = router;
