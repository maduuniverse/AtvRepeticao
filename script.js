let numero = Number(prompt("Digite um número:"));
let fatorial = 1;

while (numero > 1) {
    fatorial =  fatorial * numero;
    numero--;
}

alert(`Fatorial: ${fatorial}`);