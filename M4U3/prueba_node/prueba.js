var moment = require ("moment");

moment.locale('es');
console.log('Esta línea tardó' + moment().startOf('millisecond').fromNow() + ' en ejecutarse');
console.log('La fecha actual es: ' + moment().format('MMMM Do YYYY, h:mm:ss a') );
console.log("Nací " + moment('27/04/1978','DD/MM/YYYY').fromNow());