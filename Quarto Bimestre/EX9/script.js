var tabuadaOutput = document.getElementById("tabuada-output");
for (var numero = 1; numero <= 100; numero++) {
  for (var i = 1; i <= 10; i++) {
    tabuadaOutput.innerHTML += `${numero} x ${i} = ${numero * i}<br>`;
  }
  if (numero % 10 === 0) {
    tabuadaOutput.innerHTML += "<hr>";
  }
}

var numerosParesOutput = document.getElementById("numeros-pares-output");
for (var num = 2000; num <= 2022; num += 2) {
  numerosParesOutput.innerHTML += `${num}<br>`;
}

var anosBissextosOutput = document.getElementById("anos-bissextos-output");
for (var ano = 1004; ano <= 2022; ano += 4) {
  if ((ano % 400 === 0) || (ano % 100 !== 0 && ano % 4 === 0)) {
    anosBissextosOutput.innerHTML += `${ano}<br>`;
  }
}
