let negativos = 0;
let numero = Number(prompt("Digite um número (0 para sair):"));

while (numero !== 0) {
    if (numero < 0) {
        negativos++;
    }

    numero = Number(prompt("Digite outro número (0 para sair):"));
}

alert(`Quantidade de negativos: ${negativos}`);
