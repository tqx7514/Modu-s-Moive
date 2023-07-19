const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meetusers', {
    meetuserNum: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_Num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userNum'
      }
    },
    user_Id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    meet_MeetNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'meets',
        key: 'meetNum'
      }
    }
  }, {
    sequelize,
    tableName: 'meetusers',
    hasTrigger: true,
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "meetuserNum" },
        ]
      },
      {
        name: "meetusers_FK_1",
        using: "BTREE",
        fields: [
          { name: "meet_MeetNum" },
        ]
      },
      {
        name: "meetusers_FK",
        using: "BTREE",
        fields: [
          { name: "user_Num" },
        ]
      },
    ]
  });
};
