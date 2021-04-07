var DataTypes = require("sequelize").DataTypes;
var _category = require("./category");
var _goods = require("./goods");
var _goods_imgs = require("./goods_imgs");
var _user = require("./user");

function initModels(sequelize) {
  var category = _category(sequelize, DataTypes);
  var goods = _goods(sequelize, DataTypes);
  var goods_imgs = _goods_imgs(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    category,
    goods,
    goods_imgs,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
