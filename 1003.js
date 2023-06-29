var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var A = Number(lines);
var B = Number(lines);
var T = (A+B);
console.log(`SOMA =${T}`);//`server para escrever texto e ${} imprimir valor
// teste