const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mycinema', {
    mycinema_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cinema_num: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cinemas',
        key: 'cinema_num'
      }
    },
    addr: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    addr_detail: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mycinema',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mycinema_num" },
        ]
      },
      {
        name: "Mycinema_FK",
        using: "BTREE",
        fields: [
          { name: "cinema_num" },
        ]
      },
      {
        name: "Mycinema_FK_1",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
