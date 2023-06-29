var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var N = 3.14159;
var R = Number(input);

let squaredNumber = (R * R);
var T =(N * squaredNumber)
var T = T.toFixed(4);
console.log(`A=${T}`)//`server para escrever texto e ${} imprimir valor


