var knex = require('./connection');


var knexObj = {
    selectAll: function () {
        console.log('knex selectAll')
        knex.select().from('burgers').then(function (response, err) {
            if (err) {
                console.log('err ' + err)
            }
            console.log(response);
        }).finally(() => {
            console.log('done');
            knex.destroy();
        })
    },

    updateOne: function (oldName, newName) {
        console.log('knex updateOne')
        knex('burgers').where('burger_name', '=', oldName).update({
            burger_name: newName
        }).then(function (err) {
            if (err) throw err;
        }).finally(() => {
            console.log(`You have updated ${oldName} to ${newName}!`)
            knex.destroy();
        })
    },

    insertOne: function (newName) {
        console.log('knex insertOne');
        knex('burgers').insert({
            burger_name: newName
        }).then(function (err) {
            if (err) throw err;
        }).finally(() => {
            console.log(`You have added ${newName}!`);
            knex.destroy();
        })

    }
}
module.exports = knexObj;
// updateOne(oldBurger, newBurger);