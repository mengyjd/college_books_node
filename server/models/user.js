/*
 * @Description: 
 * @Author: 梦萦几度
 * @Date: 2021-03-27 20:34:36
 * @LastEditors: 梦萦几度
 * @LastEditTime: 2021-03-28 12:10:07
 */
import collegeBooksDB from '../config/db'
import initModels from '../schema/init-models'
import {Sequelize} from 'sequelize'
import collegeBooks from '../config/db'

const {user} = initModels(collegeBooks)

const addUser = async (userInfo) => {
  await user.create(userInfo)
}

const getUserByName = async username => {
  return await user.findOne({
    where: {
      username
    }
  })
}

module.exports = {
  addUser,
  getUserByName
}
