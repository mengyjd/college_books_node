//文件名为mysqlDB.js
import mysql from 'mysql2'
import dbConfig from './db'

//建立连接的方法


function __connection(){

    const connection = mysql.createConnection({
        host     : dbConfig.host,
        user     : dbConfig.user,
        password : dbConfig.password,
        database : dbConfig.database
    });
    connection.connect();
    return connection;
}

exports.query=function(sql,parmas=null){
    //1.获取数据库连接对象
    const connection=__connection();
    return new Promise(function(reject,resolve){

        //2执行sql语句
        connection.query(sql,parmas, function (error, results, fields) {
            if (error) throw error;
            reject(results);

        });
        //3关闭连接
        connection.end();
    })
}
