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
    id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
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
    timestamps: true,
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
      {
        name: "moviecomments_FK_1",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
