//Considera a un muchacho que se deleita pintando su tablero de ajedrez. Su objetivo es saturar cada celda con tonos rojos o azules. 
//En busca de darle una identidad propia, procura tener un equilibrio entre los espacios rojos y azules, 
//previniendo que dos filas o columnas contengan el mismo número de celdas rojas. 
//¿Lograría pintar el tablero de ajedrez siguiendo estas pautas? ¿Qué acontecería si, en vez de un tablero de ajedrez común de 8x8, 
//tuviera uno monumental de 1000x1000?


function generarTableroAjedrez(tamano) {
    const tablero = Array.from({ length: tamano }, () => Array(tamano).fill('A')); // 'A' para azul
    const maximosRojosPorFila = Math.min(tamano, Math.floor(tamano / 2)); // Máximo de celdas rojas por fila
    
    // Intentamos llenar el tablero cumpliendo las restricciones
    for (let fila = 0; fila < tamano; fila++) {
        const rojosEnFila = fila % (maximosRojosPorFila + 1); // Alternamos el número de celdas rojas
        let rojosColocados = 0;

        // Colocamos celdas rojas en la fila
        for (let columna = 0; columna < tamano; columna++) {
            if (rojosColocados < rojosEnFila) {
                tablero[fila][columna] = 'R'; // 'R' para rojo
                rojosColocados++;
            }
        }
    }

    return tablero;
}

function imprimirTablero(tablero) {
    tablero.forEach(fila => {
        console.log(fila.join(' '));
    });
}

// Generar y mostrar un tablero de 8x8
console.log("Tablero de 8x8:");
const tableroPequeno = generarTableroAjedrez(8);
imprimirTablero(tableroPequeno);

// Generar y mostrar un tablero de 1000x1000
console.log("\nTablero de 1000x1000:");
const tableroGrande = generarTableroAjedrez(1000);
// Descomentar la siguiente línea para imprimir el tablero de 1000x1000
// imprimirTablero(tableroGrande);


