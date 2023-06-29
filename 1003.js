var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var A = Number(lines);
var B = Number(lines);

let squaredNumber = (R * R);
var T =(N * squaredNumber)
var T = T.toFixed(4);
console.log(`SOMA =${T}`)//`server para escrever texto e ${} imprimir valor