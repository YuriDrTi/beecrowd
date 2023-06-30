var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);

var T = (B*C);
var T = T.toFixed(2);

console.log(`NUMBER = ${A}`);
console.log(`SALARY = U$ ${T}`);