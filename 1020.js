//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
var input = require('fs').readFileSync('entrada','utf8');
var lines = input.split('\n');

var N = Number(lines[0]);
var A = Number(0);
var M = Number(0);
var D = Number(0);

while(N>0){
    if (N>=365){
    N = (N-365);
        var A = (A+1);}
else if (N>=30){
    N = (N-30);
        var M = (M+1);}
else if (N>=1){
    N = (N-1);
        var D = (D+1);}
}
console.log(`${A} ano(s)`);
console.log(`${M} mes(es)`);
console.log(`${D} dia(s)`);