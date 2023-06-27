const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cinema', {
    cinema_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'regions',
        key: 'grade'
      }
    },
    addr: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cinema: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cinema',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cinema_num" },
        ]
      },
      {
        name: "cinema_FK",
        using: "BTREE",
        fields: [
          { name: "grade" },
        ]
      },
    ]
  });
};
