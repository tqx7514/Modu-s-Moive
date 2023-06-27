const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    userNum: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "users_UN"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tel: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    age: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    point: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userNum" },
        ]
      },
      {
        name: "users_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
