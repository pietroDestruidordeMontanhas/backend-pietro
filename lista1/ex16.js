const input = require('readline-sync')

const a = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 6 },
  { nome: "Pedro", nota: 9 },
  { nome: "Ana", nota: 5 },
  { nome: "Lucas", nota: 7 },
  { nome: "Beatriz", nota: 8.5 }
];

const as = a.map(x => ({...x, situacao: x.nota >= 7 ? "Aprovado" : "Reprovado"}));

const ap = as.filter(x => x.situacao === "Aprovado");
const na = ap.length;

const sn = a.reduce((s, x) => s + x.nota, 0);
const m = sn / a.length;

console.log("Boletim da Turma:");
console.log(as);
console.log(`Aprovados: ${na} de ${a.length} alunos`);
console.log(`Média geral: ${m.toFixed(2)}`);