let contador = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        contador++;
    }
}

alert(`Total de números divisíveis por 7: ${contador}`);