const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regions', {
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    region: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'regions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "grade" },
        ]
      },
    ]
  });
};
