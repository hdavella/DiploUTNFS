const cantidadaRecorrer = parseInt(prompt('Ingrese la distancia a recorrer (en metros): ', ''));
const distancias = [100000, 30000, 10000, 1000];
const medio = ["avión", "el auto", "el colectivo", "la bicicleta", "pié"];

// Extremos
if (cantidadaRecorrer >= distancias[0]) {
    console.log("Se debe utilizar el avión como medio de transporte");
} else if (cantidadaRecorrer <= distancias[(distancias.length) - 1]) {
    console.log("Se debe caminar hacia el destino");
}

// Medios
for (let i = 1; i < (distancias.length) ; i++) {
    if(cantidadaRecorrer <= distancias[i-1] && cantidadaRecorrer > distancias[i]){
        console.log(`Se debe utilizar ${medio[i]} como medio de transporte`);
    }
}