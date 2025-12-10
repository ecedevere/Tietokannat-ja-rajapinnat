const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from opintojakso where idOpintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (Nimi,Laajuus,Tunnus,Kuvaus) values(?,?,?,?)',
      [opintojakso.Nimi, opintojakso.Laajuus, opintojakso.Tunnus, opintojakso.Kuvaus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set Nimi=?,Laajuus=?, Tunnus=?, Kuvaus=? where idOpintojakso=?',
      [opintojakso.Nimi, opintojakso.Laajuus, opintojakso.Tunnus, opintojakso.Kuvaus, id],
      callback
    );
  }
};
module.exports = opintojakso;