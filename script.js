let numero;

do {
    numero = Number(prompt("Digite um número entre 1 e 10:"));
} while (numero < 1 || numero > 10);

   alert("Número válido!");