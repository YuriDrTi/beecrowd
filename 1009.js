var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = (lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);

var S = ((C*15)/100);
var T = (B+S)
var T = T.toFixed(2);

console.log(`TOTAL = R$ ${T}`);