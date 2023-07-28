const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservations', {
    reserve_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    movie_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cinema: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    start: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    end: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    room: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    person: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    seat: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    discount: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reservations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reserve_num" },
        ]
      },
    ]
  });
};
