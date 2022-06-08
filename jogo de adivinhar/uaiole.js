
var numeroAleatorio = Math.round(100*(Math.random())) 

var numeroDigitado = 0 
 var tentativas =0 

while (true) {
  numeroDigitado = prompt("Adivinhe o numero. (0-100) : ") 
  tentativas++        
  if (numeroDigitado == numeroAleatorio) break
  if (numeroDigitado > numeroAleatorio) {
     alert("O número é menor, Tente de novo...") 
    } else {
     alert("O número é maior, Tente de novo...") 
    }
}
document.write("Número: ",numeroAleatorio,"<br>") 
document.write("Você acertou em ",tentativas," tentativas!") 

