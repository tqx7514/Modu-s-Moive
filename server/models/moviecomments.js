const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moviecomments', {
    mc_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    createAt: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'movies',
        key: 'movie_id'
      }
    }
  }, {
    sequelize,
    tableName: 'moviecomments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mc_num" },
        ]
      },
      {
        name: "moviecomments_FK",
        using: "BTREE",
        fields: [
          { name: "movie_id" },
        ]
      },
    ]
  });
};
