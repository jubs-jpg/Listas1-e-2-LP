var fastfood1 = prompt( "Digite o primeiro fastfood:");
var fastfood2 = prompt( "Digite o segundo fastfood:");
var fastfood3 = prompt( "Digite o terceiro fastfood:");

var roupas1 = prompt( "Digite a primeiro roupa:");
var roupas2 = prompt( "Digite a primeiro roupa:");
var roupas3 = prompt( "Digite a primeiro roupa:");

var acessorios1 = prompt( "Digite o primeiro acessorio:");
var acessorios2 = prompt( "Digite o primeiro acessorio:");
var acessorios3 = prompt( "Digite o primeiro acessorio:");

const fastfood = [fastfood1, fastfood2, fastfood3];
const roupas = [roupas1, roupas2, roupas3];
const acessorios = [acessorios1, acessorios2, acessorios3];

const compras = fastfood.concat("<br>", roupas,"<br>", acessorios);

document.write("Compras:"+"<br>"+compras);