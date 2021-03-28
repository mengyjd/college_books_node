/*
 * @Description: 
 * @Author: 梦萦几度
 * @Date: 2021-03-27 20:39:12
 * @LastEditors: 梦萦几度
 * @LastEditTime: 2021-03-28 22:03:14
 */
import user from '../models/user'
import { uuid } from '../utils/utils'
import _res from '../utils/response'
import { encrypt, decrypt, SECRET } from '../utils/crypt'
import jwt from 'jsonwebtoken'



const register = async ctx => {
  const { username, password } = ctx.request.body

  if (!username || !password) {
    ctx.body = _res.err({code: '0001', msg: `请输入用户名和密码`})
    return
  }

  if (await user.getUserByName(username)) {
    ctx.body = _res.err({code: '0002', msg: '用户已存在'})
    return
  }

  const newPassword = encrypt(password)

  let userInfo = {
    username,
    password: newPassword,
    user_id: uuid(),
  }

  try {
    await user.addUser(userInfo)
    ctx.body = _res.suc()
  } catch (error) {
    console.log('新增用户失败: ', error);
    ctx.body = _res.err({code: '0003', msg: '注册失败'})
  }
}

const login = async ctx => {
  const { username, password } = ctx.request.body

  const userInfo = await user.getUserByName(username)

  // 用户名不存在
  if (!userInfo) {
    ctx.body = _res.err({code: '0001', msg: `用户名错误`})
    return
  }

  const userPwdDB = userInfo.password
  const isCorrect = decrypt(password, userPwdDB)

  if (isCorrect) {
    const token = jwt.sign({ username }, SECRET);
    ctx.body = _res.suc({data: token})
  } else {
    ctx.body = _res.err({code: '0002', msg: '密码错误'})
  }
}

const test = async ctx => {
  ctx.body = 'test'
}



export default {
  register,
  login,
  test
}
