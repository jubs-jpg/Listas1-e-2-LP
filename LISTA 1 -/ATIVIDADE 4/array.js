var j, h, y, u, q;

j=prompt("Digite a primeira palavra:");
console.log(j);
h=prompt("Digite a segunda palavra:");
console.log(h);
y=prompt("Digite a terceira palavra:");
console.log(y);
u=prompt("Digite a quarta palavra:");
console.log(u);
q=prompt("Digite a quinta palavra:");
console.log(q);

const palavras=[j, h, y, u, q];
console.log(palavras);
const mp = Math.max(...palavras.map(palavra => palavra.length));
console.log(mp);
document.write("A maior palavra tem "+mp+" letras.");