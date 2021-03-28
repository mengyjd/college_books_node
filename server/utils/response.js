/*
 * @Description: 
 * @Author: 梦萦几度
 * @Date: 2021-03-28 10:44:57
 * @LastEditors: 梦萦几度
 * @LastEditTime: 2021-03-28 14:16:25
 */

export default {
  suc: ({code='0000', msg='成功', data = {}}) => {
    return {
      code,
      msg,
      data
    }
  },
  err: ({code='0001', msg='失败', data = {}}) => {
    return {
      code,
      msg,
      data
    }
  },
}
