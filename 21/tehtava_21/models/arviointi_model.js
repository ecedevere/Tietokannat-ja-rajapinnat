const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from arviointi where idarviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (idOpiskelija,idOpintojakso,Päivämäärä,Arvosana) values(?,?,?,?)',
      [arviointi.idOpiskelija, arviointi.idOpintojakso, arviointi.Päivämäärä, arviointi.Arvosana],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idarviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set idOpiskelija=?,idOpintojakso=?, Päivämäärä=?, Arvosana=? where idarviointi=?',
      [arviointi.idOpiskelija, arviointi.idOpintojakso, arviointi.Päivämäärä, arviointi.Arvosana, id],
      callback
    );
  }
};
module.exports = arviointi;