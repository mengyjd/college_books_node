import _res from '../utils/response'
import goods from '../models/goods'
import {uuid} from '../utils/utils'

export const publish = async ctx => {
    const req = ctx.request.body
    if(!req.title) {
        ctx.body = _res.err({msg: '请输入标题'})
        return
    }
    if(!req.price) {
        ctx.body = _res.err({msg: '请输入价格'})
        return
    }
    if(!req.categoryId) {
        ctx.body = _res.err({msg: '请选择分类'})
        return
    }

    console.log("req===", req)

    const goodsObj = {
        goods_id: uuid(),
        goods_title: req.title,
        goods_desc: req.desc,
        goods_imgs_id: uuid(),
        goods_price: req.price,
        goods_original_price: req.originalPrice,
        goods_category_id: req.categoryId,
        goods_stock: req.stock,
        imgs: ['test1.png', 'test2.png', 'test3.png']
    }

    try{
        await goods.addGoods(goodsObj)
        ctx.body = _res.suc()
    } catch (err) {
        console.log("发布商品失败: ", err)
        ctx.body = _res.err({code: '0002', msg: '发布商品失败'})
    }
}

export const saveImg = async ctx => {
    const req = ctx.request.body
    console.log("req===", req)
    if(!req.goodsId) {
        ctx.body = _res.err({msg: '图片上传失败', code: '0001'})
        return
    }
    if(!req.imgUrl) {
        ctx.body = _res.err({msg: '图片上传失败', code: '0002'})
        return
    }

    const goodsImgObj = {
        goods_id: req.goodsId,
        img_filename: req.imgUrl
    }

    try{
        await goods.saveImgToDB(goodsImgObj)
        ctx.body = _res.suc()
    } catch (err) {
        console.log("保存图片到数据库失败: ", err)
        ctx.body = _res.err({code: '0003', msg: '图片上传失败'})
    }
}
