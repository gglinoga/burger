var knexObj = require('./config/knex');

console.log(knexObj.selectAll());


//add code that will call knexObj functions using burger specific input....

knexObj.selectAll();
knexObj.insertOne(newBurger);
knexObj.updateOne(oldName, newName);

module.export = burger;