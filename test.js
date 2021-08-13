var together = new Date();
together.setFullYear(2021,4,2);
together.setHours(-3);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);

var e = Date();
var f = (Date.parse(e) - Date.parse(together)) / 1000;
var g = Math.floor(f / (3600 * 24));
f = f % (3600 * 24);
var b = Math.floor(f / 3600);
if (b < 10) {
    b = "0" + b
}
f = f % 3600;
var d = Math.floor(f / 60);
if (d < 10) {
    d = "0" + d
}
f = f % 60;
if (f < 10) {
    f = "0" + f
}
console.log(Date.parse(together))
console.log(e)