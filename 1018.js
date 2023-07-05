var input = require('fs').readFileSync('entrada','utf8');
var lines = input.split('\n');

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

var N = Number(lines[0]);
var D = Number(lines[0]);
var d1 = Number(0);
var d2 = Number(0);
var d5 = Number(0);
var d10 = Number(0);
var d20 = Number(0);
var d50 = Number(0);
var d100 = Number(0);


while(N>0){
    if (N>=100){
        N = (N-100);
        var d100 = (d100+1);}
else if (N>=50){
    N = (N-50);
    var d50 = (d50+1);}
else if (N>=20){
    N = (N-20);
    var d20 = (d20+1);}
else if (N>=10){
    N = (N-10);
    var d10 = (d10+1);}
else if (N>=5){
    N = (N-5);
    var d5 = (d5+1);}
else if (N>=2){
    N = (N-2);
    var d2 = (d2+1);}
else if (N>=1){
    N = (N-1);
    var d1 = (d1+1);}
}
console.log(D);
console.log(`${d100} nota(s) de R$ 100,00`);
console.log(`${d50} nota(s) de R$ 50,00`);
console.log(`${d20} nota(s) de R$ 20,00`);
console.log(`${d10} nota(s) de R$ 10,00`);
console.log(`${d5} nota(s) de R$ 5,00`);
console.log(`${d2} nota(s) de R$ 2,00`);
console.log(`${d1} nota(s) de R$ 1,00`);
