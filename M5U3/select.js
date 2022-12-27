var pool = require('./db');
pool.query("select * from empleados").then(function(resultados){
    console.log(resultados);
});