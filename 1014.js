var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = Number(lines[0]);
var Y = Number(lines[1]);

var Kml = (X/Y);

console.log(`${Kml.toFixed(3)} km/l`)