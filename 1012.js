var input = require('fs').readFileSync('/entrada','utf8');
var lines = input.split(' ');
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split(' ');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);


var T = (A*C/2);
var CR = (3.14159*(Math.pow(C,2)));
var TR = ((A+B)*C)/2;
var Q = Math.pow(B,2);
var R = (A*B);


console.log(`TRIANGULO: ${T.toFixed(3)}`);
console.log(`CIRCULO: ${CR.toFixed(3)}`);
console.log(`TRAPEZIO: ${TR.toFixed(3)}`);
console.log(`QUADRADO: ${Q.toFixed(3)}`);
console.log(`RETANGULO: ${R.toFixed(3)}`);