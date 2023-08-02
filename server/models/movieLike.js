const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movieLike', {
    movie_like_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mc_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'moviecomments',
        key: 'mc_num'
      }
    },
    id: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'movieLike',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "movie_like_num" },
        ]
      },
      {
        name: "movieLike_FK",
        using: "BTREE",
        fields: [
          { name: "mc_num" },
        ]
      },
    ]
  });
};
