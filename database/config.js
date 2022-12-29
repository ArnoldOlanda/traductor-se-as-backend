const { Pool } = require('pg')

const pool = new Pool({
    connectionString:`${process.env.POSTGRE_URI}`,
    ssl: { rejectUnauthorized: false }
})

const query = async (query='select 1 +1;') => {
    await pool.connect();
    const results = await pool.query(query);
    return results;
}

module.exports = {
    query
}