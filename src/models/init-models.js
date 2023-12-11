import { DataTypes } from "sequelize";
import accountModel from "./account.js";
import transaction_recordsModel from "./transaction_records.js";
import transaction_typesModel from "./transaction_types.js";
import userModel from "./user.js";

function initModels(sequelize) {
  const user = userModel(sequelize, DataTypes);
  const account = accountModel(sequelize, DataTypes);
  const transaction_types = transaction_typesModel(sequelize, DataTypes);
  const transaction_records = transaction_recordsModel(sequelize, DataTypes);

  account.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(account, { as: "accounts", foreignKey: "user_id"});
  transaction_records.belongsTo(transaction_types, { as: "transaction", foreignKey: "transaction_id"});
  transaction_types.hasMany(transaction_records, { as: "transaction_records", foreignKey: "transaction_id"});
  transaction_records.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(transaction_records, { as: "transaction_records", foreignKey: "account_id"});

  return {
    account,
    transaction_records,
    transaction_types,
    user,
  };
}

export default initModels;