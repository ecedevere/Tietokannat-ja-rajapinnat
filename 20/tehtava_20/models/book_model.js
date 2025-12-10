const db = require('../database');

const book = {
  getAll: async function(callback) {
    try {
      const rows = await db.query('SELECT * FROM book');
      callback(null, rows);
    } catch (err) {
      callback(err);
    }
  },

  getOne: async function(id, callback) {
    try {
      const rows = await db.query('SELECT * FROM book WHERE id_book=?', [id]);
      callback(null, rows);
    } catch (err) {
      callback(err);
    }
  },

  add: async function(book, callback) {
    try {
      const result = await db.query(
        'INSERT INTO book (name, author, isbn) VALUES (?, ?, ?)',
        [book.name, book.author, book.isbn]
      );
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  delete: async function(id, callback) {
    try {
      const result = await db.query('DELETE FROM book WHERE id_book=?', [id]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  update: async function(id, book, callback) {
    try {
      const result = await db.query(
        'UPDATE book SET name=?, author=?, isbn=? WHERE id_book=?',
        [book.name, book.author, book.isbn, id]
      );
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  }
};

module.exports = book;