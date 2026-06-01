let contador = 0
let numero = Number(prompt("Digite um número (0 para sair): "))
while (numero !== 0) {
    if (numero > 0) {
        contador++
    }
    numero = Number(prompt("Digite outro número (0 para sair): "))
}
alert(`Quantidade de números positivos digitados: ${contador}`)
