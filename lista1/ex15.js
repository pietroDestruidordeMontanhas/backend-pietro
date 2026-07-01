const input = require('readline-sync')

const p = [
  { id: 1, nome: "Notebook", preco: 2500 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Teclado", preco: 150 },
  { id: 4, nome: "Monitor", preco: 1200 },
  { id: 5, nome: "Fone", preco: 90 }
];

console.log("Produto ID 3:", p.find(x => x.id === 3));

console.log("Produtos acima de 100:", p.filter(x => x.preco > 100));

console.log("Nomes:", p.map(x => x.nome));

console.log("Catálogo:");
p.forEach(x => console.log(`ID:${x.id} | ${x.nome} | R$${x.preco}`));