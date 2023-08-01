const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movietimes', {
    movietimes_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cinemas',
        key: 'cinema_num'
      }
    },
    cinema: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    room: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    movie_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    age: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    disp: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    language: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    start: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    end: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'movietimes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "movietimes_num" },
        ]
      },
    ]
  });
};
