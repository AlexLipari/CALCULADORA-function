var A = 0
var B = 0
var contador = 0
var desejaContinuar = 1
while (desejaContinuar == 1){
A = parseInt(prompt("insira o primeiro número"))
B = parseInt(prompt("insira o segundo número"))

var opcao = prompt("qual operação deseja? Soma (1) Subtração (2) Multiplicação (3) Divisão (4)")

if (opcao == 1){
console.log("Soma dos valores:") , Somar (A , B)
contador++
}else if (opcao == 2){
console.log("Subtração dos valores:") , Subtrair (A , B)
contador++    
}else if (opcao == 3){
console.log("Multiplicação dos valores:") , Multiplicar (A , B)
contador++    
}else if (opcao == 4){
console.log("Divisão dos valores:") , Dividir (A , B)
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
console.log(Somar (A , B))