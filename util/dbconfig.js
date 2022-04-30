const mysql=require('mysql');
module.exports={
    config:{
        host:'47.102.145.29',
        port:'3306',
        user:'root',
        password:'123456',
        database:'userInfo',
    },
    // 创建数据库池对象
    sqlConnect:function(sql,sqlArr,callBack){
        var pool=mysql.createPool(this.config)
        pool.getConnection((err,conn)=>{
            // console.log(123);
            if(err){
                console.log(err);
                return;
            }
            // 数据驱动回调
            conn.query(sql,sqlArr,callBack);
            // 释放连接
            conn.release();
        })
    }
}