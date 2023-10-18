var numeros = [2, 3, 6, 8, 9, 10, 12, 15, 18, 20, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48];
var somaPares = 0;

numeros.forEach(function(numero) {
  if (numero % 2 === 0) {
    somaPares += numero;
  }
});

document.getElementById("sumOutput").textContent = "Soma dos números pares: " + somaPares;

var nomes = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Harry", "Ivy", "Jack"];
nomes.unshift("Zara"); 
nomes.pop(); 

var namesList = document.getElementById("namesList");
nomes.forEach(function(nome) {
  var listItem = document.createElement("li");
  listItem.textContent = nome;
  namesList.appendChild(listItem);
});

var numRows = prompt("Digite o número de linhas:");
var numCols = prompt("Digite o número de colunas:");
var matrixOutput = document.getElementById("matrixOutput");

var matriz = [];
for (var i = 0; i < numRows; i++) {
  matriz.push([]);
  for (var j = 0; j < numCols; j++) {
    var numero = prompt(`Digite o número para a posição [${i + 1}][${j + 1}]:`);
    matriz[i].push(numero);
  }
}

var table = document.createElement("table");
matriz.forEach(function(row) {
  var tr = document.createElement("tr");
  row.forEach(function(cell) {
    var td = document.createElement("td");
    td.textContent = cell;
    tr.appendChild(td);
  });
  table.appendChild(tr);
});
matrixOutput.appendChild(table);
