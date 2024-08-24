//connection 

const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'blogdb',
    password: 'pragya@12',
    port: 5432,
});

async function check(){
    await client.connect() 
}

check();
module.exports = client;
