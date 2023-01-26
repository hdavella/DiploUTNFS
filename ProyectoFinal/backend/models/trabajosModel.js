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
async function altaTrabajo(obj){
    try{
        var query = "insert into trabajos set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
    }

}
async function deleteTrabajoById(id){
    try{
        var query = "delete from trabajos where id = ?";
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
    }

}

module.exports={getTrabajos, altaTrabajo, deleteTrabajoById}