var dbConfig =require('../util/dbconfig')

getUser=(req,res)=>{
    var sql="select * from users";
    var sqlArr=[];
    var callBack=(err,data)=>{
      if(err){
        console.log('连接错误');
      }else{
        res.send({
          'list':data
        })
      }
    }
    dbConfig.sqlConnect(sql,sqlArr,callBack)
}
getPostUser=(req,res)=>{
    let {id}=req.query;
    var sql=`select * from users where id=${id}`
    var sqlArr=[id];
    var callBack=(err,data)=>{
        if(err){
          console.log('连接错误');
        }else{
          res.send({
            'list':data
          })
        }
      }
    dbConfig.sqlConnect(sql,sqlArr,callBack)
}
addOrder=(req,res)=>{
  // let {id}=req.query;
  console.log(req.body.id);
  var sql=`insert into orders(number) values(${req.body.id});`

  // var sql=`select * from users where id=${id}`
  var sqlArr=[];
  var callBack=(err,data)=>{
      if(err){
        console.log('连接错误');
      }else{
        res.send({
          'list':data
        })
      }
    }
  dbConfig.sqlConnect(sql,sqlArr,callBack)
}
function rand(min,max){
    return Math.floor(Math.random()*(max-min))+min
}
sendCode=(req,res)=>{
    let phone=req.body.user_phone;
    let code=rand(1000,9999);
    res.send({
        'code':200,
        'msg':'发送成功'
    })
    console.log(code);
}
login = (req,res)=>{
    res.send(req.body);
    // res.send({
    //     'code':200,
    //     'msg':'发送成功'
    // })
}
module.exports={
    getUser,
    getPostUser,
    sendCode,
    login,
    addOrder
}