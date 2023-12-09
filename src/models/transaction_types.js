const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction_types', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    transaction: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transaction_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "transaction_types_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
