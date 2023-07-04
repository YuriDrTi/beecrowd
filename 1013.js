//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split(' ');

var input = require('fs').readFileSync('entrada', 'utf8');
var lines = input.split(' ');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);

var T = ((A + B + Math.abs(A - B)) / 2);



console.log(`${T > C ? T : C} eh o maior`);