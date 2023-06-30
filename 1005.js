var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0]);
var B = Number(lines[1]);
var A = (A*3.5);
var B = (B*7.5);
var T = ((A+B)/11);
var T = T.toFixed(5);

console.log(`MEDIA = ${T}`);