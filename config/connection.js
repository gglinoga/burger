const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'user',
        password: 'password',
        database: 'burgers_db'
    }
});

module.exports = knex;

// console.log ('knex select')
// knex.select().from('burgers').then(function(response, err) {
//     if (err) throw err;
//     console.log(response);
// }).finally(() =>{
//     console.log('done');
//     knex.destroy();
// });