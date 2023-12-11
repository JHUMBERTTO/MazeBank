export default function(sequelize, DataTypes) {
  const transaction_types = sequelize.define(
    'transaction_types', {
    id: {
      autoIncrement: true,
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
  return transaction_types;
};
