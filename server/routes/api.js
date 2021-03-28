/*
 * @Description: 
 * @Author: 梦萦几度
 * @Date: 2021-03-27 20:45:58
 * @LastEditors: 梦萦几度
 * @LastEditTime: 2021-03-28 12:15:34
 */
// routes/api.js
import user from '../controllers/user'
import koaRouter from 'koa-router'

const router = koaRouter()

router.post('/register',user.register)
router.post('/login',user.login)
router.get('/test',user.test)

export default router
