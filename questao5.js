function reverse(){
  const palavra = document.getElementById('palavra').value
  const palavraReverse = []
  console.log(palavra)

  for (let index = 0; index <= palavra.length; index++) {
    palavraReverse.push(palavra[palavra.length - index])
    
    
  }
document.getElementById('reverso').value = palavraReverse.join('')


}