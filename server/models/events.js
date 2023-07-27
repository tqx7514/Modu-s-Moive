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
    categoryId: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    view: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
        name: "events_FK",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};
