const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'netuser',
  password: 'netpass',
  database: 'tehtava20',
  port: 3306,     
  connectionLimit: 5
});

module.exports = {
  query: async function(sql, params) {
    let conn;
    try {
      conn = await pool.getConnection();
      const res = await conn.query(sql, params);
      return res;
    } finally {
      if (conn) conn.release();
    }
  }
};
