const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods', {
    goods_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    goods_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    goods_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    goods_price: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: true
    },
    goods_original_price: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: true
    },
    goods_category_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    goods_stock: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'goods',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "goods_id" },
        ]
      },
    ]
  });
};
