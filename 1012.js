var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);


var T = (A*C/2);
var C = ((2*3.14159)*C);
var TR = ((A*B/2)*C);
var Q = Math.pow(B,2);
var R = (A*B/2);


console.log(`TRIANGULO: ${T.toFixed(3)}`);
console.log(`CIRCULO: ${C.toFixed(3)}`);
console.log(`TRAPEZIO: ${TR.toFixed(3)}`);
console.log(`QUADRADO: ${Q.toFixed(3)}`);
console.log(`RETANGULO: ${R.toFixed(3)}`);
// errado refazer 