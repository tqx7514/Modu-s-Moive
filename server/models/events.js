const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events', {
    eventNum: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eventTitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    eventContent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eventImg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userNum'
      }
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'eventcategory',
        key: 'categoryId'
      }
    },
    startEventDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    endEventDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'events',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eventNum" },
        ]
      },
      {
        name: "categoryId",
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
      {
        name: "userNum",
        using: "BTREE",
        fields: [
          { name: "userNum" },
        ]
      },
    ]
  });
};
