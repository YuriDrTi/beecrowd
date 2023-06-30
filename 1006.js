var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2])
var A = (A*2);
var B = (B*3);
var C = (C*5);
var T = ((A+B+C)/10);
var T = T.toFixed(1);

console.log(`MEDIA = ${T}`);