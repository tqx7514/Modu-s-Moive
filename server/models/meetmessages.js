const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meetmessages', {
    messageNum: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userNum'
      }
    },
    meetNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'meets',
        key: 'meetNum'
      }
    },
    message: {
      type: DataTypes.STRING(9999),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'meetmessages',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "messageNum" },
        ]
      },
      {
        name: "messages_FK_1",
        using: "BTREE",
        fields: [
          { name: "meetNum" },
        ]
      },
      {
        name: "meetmessages_FK",
        using: "BTREE",
        fields: [
          { name: "sender" },
        ]
      },
    ]
  });
};
