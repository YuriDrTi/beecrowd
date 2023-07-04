var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var T = Number(lines[0]);
var Vm = Number(lines[1]);

var D = (T*Vm);

var CM = (D/12);

console.log(`${CM.toFixed(3)}`)