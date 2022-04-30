var express = require('express');
var router = express.Router();
var user=require('../controllers/usersController')
/* GET users listing. */
router.get('/', user.getUser);
router.get('/getPostUser', user.getPostUser);
module.exports = router;
