var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _transaction_records = require("./transaction_records");
var _transaction_types = require("./transaction_types");
var _user = require("./user");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var transaction_records = _transaction_records(sequelize, DataTypes);
  var transaction_types = _transaction_types(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  transaction_records.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(transaction_records, { as: "transaction_records", foreignKey: "account_id"});
  transaction_records.belongsTo(transaction_types, { as: "transaction", foreignKey: "transaction_id"});
  transaction_types.hasMany(transaction_records, { as: "transaction_records", foreignKey: "transaction_id"});
  account.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(account, { as: "accounts", foreignKey: "user_id"});

  return {
    account,
    transaction_records,
    transaction_types,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
