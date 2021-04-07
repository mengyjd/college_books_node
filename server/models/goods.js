/*
 * @Description:
 * @Author: 梦萦几度
 * @Date: 2021-03-27 20:34:36
 * @LastEditors: 梦萦几度
 * @LastEditTime: 2021-03-28 12:10:07
 */
import initModels from '../schema/init-models'
import SequelizeDB from '../config/sequelize'

const {goods, goods_imgs} = initModels(SequelizeDB)

const addGoods = async (goodsObj) => {
  await goods.create(goodsObj)
}

// 将图片文件保存到数据库
const saveImgToDB = async (imgObj) => {
  await goods_imgs.create(imgObj)
}

module.exports = {
  addGoods,
  saveImgToDB
}
