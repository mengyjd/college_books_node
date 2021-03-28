/*
 * @Description: 
 * @Author: 梦萦几度
 * @Date: 2021-03-17 23:17:26
 * @LastEditors: 梦萦几度
 * @LastEditTime: 2021-03-28 21:58:17
 */
// index.js
import Koa from 'koa'
import koaRouter from 'koa-router'
import json from 'koa-json'
import logger from 'koa-logger'
import koaBody from 'koa-body'
import statics from 'koa-static'
import path from 'path'

const app = new Koa()
const router = koaRouter()
import api from './server/routes/api'

app.use(koaBody())
app.use(json())
app.use(logger())
// 静态服务
app.use(statics(path.join(__dirname, './upload/')))

app.use(async (ctx,next) => {
    await next()
})

router.use('/cb', api.routes())

app.use(router.routes())

app.on('error',(err,ctx) => {
    console.log('server error', err)
})



app.listen(3010,()=>{
  console.log('服务启动成功,端口：3010,地址：http://localhost:3010')
})

export default app

