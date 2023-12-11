export default function(sequelize, DataTypes) {
  const transaction_records = sequelize.define(
    'transaction_records', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transaction_types',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'account',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    payment: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transaction_records',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "transaction_records_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  return transaction_records;
};
