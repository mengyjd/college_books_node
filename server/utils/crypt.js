/*
 * @Description: 
 * @Author: 梦萦几度
 * @Date: 2021-03-28 11:36:37
 * @LastEditors: 梦萦几度
 * @LastEditTime: 2021-03-28 13:57:36
 */
const bcrypt = require('bcrypt');
const saltRounds = 10;

export const SECRET = 'COLLEGE-BOOKS-MYJD'

// 加密
export function encrypt(pwd) {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(pwd, salt);
  return hash
}

export function decrypt(pwd, hash) {
  return bcrypt.compareSync(pwd, hash);
}
