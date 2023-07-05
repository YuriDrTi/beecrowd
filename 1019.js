//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
var input = require('fs').readFileSync('entrada','utf8');
var lines = input.split('\n');

var N = Number(lines[0]);
var H = Number(0);
var M = Number(0);
var S = Number(0);

while(N>0){
    if (N>=3600){
    N = (N-3600);
        var H = (H+1);}
else if (N>=60){
    N = (N-60);
        var M = (M+1);}
else if (N>=1){
    N = (N-1);
        var S = (S+1);}
}
console.log(`${H}:${M}:${S}`);