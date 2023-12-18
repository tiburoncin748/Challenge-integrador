const mysql = require('mysql2');

const pool = mysql.createPool({
    
    user: 'root',
    password: 'Pomboneit@r748',
    host: 'localhost',
    port: 3306,
    database: 'funko_scheme',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
});

pool.getConnection((err, conn) =>{
    if (err){
        console.log ('Hubo un error al conectar a la DB: '+ err);
    }else {
        console.log('Conexión a la DB exitosa! 👌');
        conn.release();
    }
});
module.exports = {
    conn: pool.promise()
}