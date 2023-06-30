var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var T = 0;

for (let linha of lines) {
    let dados = linha.split(" ");

    if (dados.length < 3) continue;

    T = T + (Number(dados[1] * Number(dados[2])));

}
console.log(`VALOR A PAGAR: R$ ${T.toFixed(2)}`);