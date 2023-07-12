const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('postcomments', {
    commentNum: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    postNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'posts',
        key: 'postNum'
      }
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'postcomments',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "commentNum" },
        ]
      },
      {
        name: "postcomments_FK",
        using: "BTREE",
        fields: [
          { name: "postNum" },
        ]
      },
      {
        name: "postcomments_FK_1",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};
