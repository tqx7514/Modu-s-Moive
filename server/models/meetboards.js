const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meetboards', {
    meetboardNum: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    meet_Num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'meets',
        key: 'meetNum'
      }
    },
    user_Id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    body: {
      type: DataTypes.STRING(9999),
      allowNull: false
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'meetboards',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "meetboardNum" },
        ]
      },
      {
        name: "meetboards_FK",
        using: "BTREE",
        fields: [
          { name: "meet_Num" },
        ]
      },
      {
        name: "meetboards_FK_1",
        using: "BTREE",
        fields: [
          { name: "user_Id" },
        ]
      },
    ]
  });
};
