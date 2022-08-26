var A = 0
var B = 0
var contador = 0
var desejaContinuar = 1
var array = []
while (desejaContinuar == 1){
A = parseInt(prompt("insira o primeiro número"))
B = parseInt(prompt("insira o segundo número"))

var opcao = prompt("qual operação deseja? Soma (1) Subtração (2) Multiplicação (3) Divisão (4)")

if (opcao == 1){
array[contador] = Somar (A , B)   
console.log("Soma dos valores:") , array[contador]
contador++
}else if (opcao == 2){
array[contador] = Subtrair (A , B)  
console.log("Subtração dos valores:") , array[contador]
contador++    
}else if (opcao == 3){
array[contador] = Multiplicar (A , B)
console.log("Multiplicação dos valores:") , array[contador]
contador++    
}else if (opcao == 4){
array[contador] = Dividir (A , B)
console.log("Divisão dos valores:") , array[contador]
contador++    
}
desejaContinuar = prompt("deseja continuar? Digite: (1) SIM (2) NÃO")

}
function Somar ( A , B ){
    return A + B
}
function Subtrair ( A , B ){
    return A - B
}
function Multiplicar ( A , B ){
    return A * B
}
function Dividir ( A , B ){
    return A / B
}
console.log(array)