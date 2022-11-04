const {Client} = require('pg')


const client = new Client({
    host: 'db-postgresql-nyc1-43252-do-user-3919105-0.b.db.ondigitalocean.com',
    user: 'doadmin',
    port: 25060,
    password: 'AVNS_pr46S8-W01K6ngxvAFT',
    database: 'etl',
});
  client.connect();

/*const connectionString = "postgresql://doadmin:AVNS_pr46S8-W01K6ngxvAFT@db-postgresql-nyc1-43252-do-user-3919105-0.b.db.ondigitalocean.com:25060/etl?ssl=true"
const client = new Client({
    connectionString: connectionString})

    client.connect()*/

client.query('Select * from public.blocks', (err, res) => {
    console.log(res);
    client.end();
  });