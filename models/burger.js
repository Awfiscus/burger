const orm = require("../config/orm.js");

const burger = {
  selectAll(callback) {
    orm.selectAll("burgers", (res) => callback(res));
  },

  insertOne(columns, values, callback) {
    orm.insertOne("burgers", columns, values, (res) => callback(res));
  },
};

module.exports = burger;
