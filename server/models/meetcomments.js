const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meetcomments', {
    meetcommentNum: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    meetboard_Num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'meetboards',
        key: 'meetboardNum'
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
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'meetcomments',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "meetcommentNum" },
        ]
      },
      {
        name: "meetcomments_FK",
        using: "BTREE",
        fields: [
          { name: "user_Id" },
        ]
      },
      {
        name: "meetcomments_FK_1",
        using: "BTREE",
        fields: [
          { name: "meetboard_Num" },
        ]
      },
    ]
  });
};
