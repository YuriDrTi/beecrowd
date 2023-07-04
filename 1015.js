//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('/n');

var input = require('fs').readFileSync('entrada', 'utf8');
var lines = input.split('\n');

//var x = lines[0].split(' ').map(P => Number(P)); Nodo usando .map()
//var y = lines[1].split(' ').map((valor)=>{ return Number(valor); });

var x = lines[0].split(' ');
var y = lines[1].split(' ');
// x[0] = X1
// x[1] = Y1
// y[0] = X2
// y[1] = Y2

var X = Math.pow(Number(y[0])-Number(x[0]), 2);
var Y = Math.pow(Number(y[1])-Number(x[1]), 2);

console.log(X);
console.log(Y);

var t = Math.sqrt(X+Y);

console.log(`${t.toFixed(4)}`);