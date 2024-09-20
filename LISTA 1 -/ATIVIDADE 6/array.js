var number1=parseInt(prompt("Diga um primeiro número:"));
var number2=parseInt(prompt("Digite o segundo numero:"));
var number3=parseInt(prompt("Digite o terceiro numero:"));

const numeros = [number1, number2, number3];
const coca = number1+number2+number3;

var blablabla = numeros.sort();
document.write("Os números digitados são :"+blablabla+"<br>");
if (coca<100) {
document.write("O menor valor é "+blablabla[0]);
 } else {
    document.write("O maior valor é "+blablabla[2]);
 }
