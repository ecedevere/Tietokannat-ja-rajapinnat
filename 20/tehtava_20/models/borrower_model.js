const db = require('../database');

const borrower = {
  getAll: async function(callback) {
    try {
      const rows = await db.query('SELECT * FROM borrower');
      callback(null, rows);
    } catch (err) {
      callback(err);
    }
  },

  getOne: async function(id, callback) {
    try {
      const rows = await db.query('SELECT * FROM borrower WHERE id_borrower=?', [id]);
      callback(null, rows);
    } catch (err) {
      callback(err);
    }
  },

  add: async function(borrower, callback) {
    try {
      const result = await db.query(
        'INSERT INTO borrower (fname, lname, streetaddress) VALUES (?, ?, ?)',
        [borrower.fname, borrower.lname, borrower.streetaddress]
      );
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  delete: async function(id, callback) {
    try {
      const result = await db.query('DELETE FROM borrower WHERE id_borrower=?', [id]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  update: async function(id, borrower, callback) {
    try {
      const result = await db.query(
        'UPDATE borrower SET fname=?, lname=?, streetaddress=? WHERE id_borrower=?',
        [borrower.fname, borrower.lname, borrower.streetaddress, id]
      );
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  }
};

module.exports = borrower;