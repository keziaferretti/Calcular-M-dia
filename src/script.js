
function converter(){
  var nota1 = parseInt(document.getElementById("nota1").value);
  var nota2 = parseInt(document.getElementById("nota2").value);
  var nota3 = parseInt(document.getElementById("nota3").value);
  var nota4 = parseInt(document.getElementById("nota4").value);
  
  var elementoResultado = document.getElementById("resultado");
  
  var notaFinal = (nota1 + nota2 + nota3 + nota4) /4;
  
  var notaFixada = notaFinal.toFixed(1)
  
  if(notaFixada >= 7){
    elementoResultado.innerHTML = "Nota " + notaFixada  + " Parabéns!!!" + "</br>" + "Você passou de ano!"
  } else if (notaFixada >=5 && notaFixada < 7){
    elementoResultado.innerHTML = "Nota " + notaFixada  + " Ficou de Recuperação"
  }
  else {
    elementoResultado.innerHTML = "Nota " + notaFixada + " Infelizmente você reprovou de ano!"
  }
}







// //toFixed ajusta as casas decimais 
// //se aluno passou ou não
// //console.log imprimir 