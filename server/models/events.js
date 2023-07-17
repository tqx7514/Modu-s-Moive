const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events', {
    eventNum: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    eventTitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    eventContent: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    eventImg: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventcategory',
        key: 'categoryId'
      }
    },
    view: {
      type: DataTypes.INTEGER,
      allowNull: true
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
        name: "events_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
      {
        name: "events_FK",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};
