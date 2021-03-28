/*
 * @Description: 
 * @Author: 梦萦几度
 * @Date: 2021-03-27 20:31:45
 * @LastEditors: 梦萦几度
 * @LastEditTime: 2021-03-28 10:19:02
 */
// config/db.js
import Sequelize from 'sequelize' // 引入sequelize

// 使用url连接的形式进行连接，注意将root: 后面的XXXX改成自己数据库的密码
const collegeBooks = new Sequelize('mysql://root:xl123456@127.0.0.1/college_books',{
    define:{
        // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
        timestamps: false
    },
    timezone: '+08:00' // 时差区，国内需要加入不然存储的时间会有时差
})

export default collegeBooks
