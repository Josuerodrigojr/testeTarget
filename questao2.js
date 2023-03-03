let sequencia = [];
let valor = 1;
let indice = 0;


function fibonacci() {
  const numero = parseInt(document.getElementById("numero").value); 

  sequencia.push(0)
  sequencia.push(1)
  while (numero>valor){
    valor = sequencia[indice] + sequencia[indice+1]
    sequencia.push(valor)
    indice += 1

  }

  if(numero === 0 || numero ===1){
    alert ('O valor pertence a sequência de Fibonacci')
  } else{

  if(numero===valor){
    alert (`O valor pertence a sequência de Fibonacci na posição ${indice + 1}`)
  } else {
    alert('O valor não pertence a sequência de Fibonacci')
  }
}

  
}


