var pool = require('./db');

async function getTrabajos(){
    try {
        var query = 'select * from trabajos';
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={getTrabajos}