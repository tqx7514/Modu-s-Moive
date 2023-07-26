const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inquiry', {
    inquiryNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    classify: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    body: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING(5000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inquiry',
    timestamps: true,
    indexes: [
      {
        name: "inquiry_FK",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};
