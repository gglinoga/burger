var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'user',
    password: 'password',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if(err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

// console.log ('knex select')
// knex.select().from('burgers').then(function(response, err) {
//     if (err) throw err;
//     console.log(response);
// }).finally(() =>{
//     console.log('done');
//     knex.destroy();
// });

