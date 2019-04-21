var mysql = require('mysql');
var express = require('express');
var exphbs = require('express-handlebars');
var knex = require('knex');

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'user',
        password: 'password',
        database: 'burgers_db'
    }
});
