const connection = require("./connection.js");

const objToSql = (ob) => {
  const arr = [];

  // Loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(`${key}=${value}`);
    }
  }

  // Translate array of strings to a single comma-separated string
  return arr.toString();
};

const orm = {
  selectAll(tableInput, callback) {
    const query = `SELECT * FROM ${tableInput};`;
    connection.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  insertOne(table, columns, values, callback) {
    let query = `INSERT INTO ${table}`;
    query += "(";
    query += columns.toString();
    query += ")";
    query += `VALUES (?)`;

    connection.query(query, vals, (err, result) => {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
};

module.exports = orm;
