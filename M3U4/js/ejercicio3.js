const alumnos = [

    {
        nombre: 'Juan Gomez',
        nota: 7
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];
function imprimir() {
    /* const aprobados = alumnos.map(index => index.nota >= 7);
    console.log(aprobados); */

    const aprobados = alumnos.filter(index => index.nota >= 7);
    console.log(aprobados);
    
    for (let index = 0; index < alumnos.length; index++) {
        console.log(aprobados[index].nombre);
    }
    
}

