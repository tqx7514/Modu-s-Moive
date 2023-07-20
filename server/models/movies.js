const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movies', {
    movie_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    movie_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tiketing: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    popularity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "movies_UN"
    },
    age: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    img: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'movies',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "movie_num" },
        ]
      },
      {
        name: "movies_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "movie_id" },
        ]
      },
    ]
  });
};
