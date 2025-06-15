// Carcasa de la calculadora
let container = document.querySelector("#container")
let color_button = document.querySelector("#color")
color_button.addEventListener("click",cambioColor)

function cambioColor(){
    container.style.background=generarColorAleatorio();
}
function generarColorAleatorio() {
    var r = Math.floor(Math.random() * 256); // Componente rojo (0-255)
    var g = Math.floor(Math.random() * 256); // Componente verde (0-255)
    var b = Math.floor(Math.random() * 256); // Componente azul (0-255)
    var color = "rgb(" + r + ", " + g + ", " + b + ")"; // Formato RGB
    return color;
}


// Manejo de datos de la calculadora
var number_display = ""


let output = document.querySelector("#output")
let encendido_button = document.querySelector("#on_off")
encendido_button.addEventListener("click",encendidoApagado)

function encendidoApagado(){
    let numero = ""
    if (encendido_button.innerHTML== "On"){
        output.style.boxShadow="inset 0px 0px 10px 0px rgba(240, 204, 1, 0.8)"
        encendido_button.innerHTML="Off"
        numero ="0"
        output.innerHTML=numero
    }else{
        output.style.boxShadow="inset 0px 0px 10px 0px rgba(0, 0, 0, 0.3)"
        encendido_button.innerHTML="On"
        numero =" "
        output.innerHTML=numero
    }
}

let delete_digit = document.getElementById("c")
delete_digit.addEventListener("click", delete_display)

let delete_total = document.getElementById("del")
delete_total.addEventListener("click",delete_digit_display)

function delete_digit_display(){
    number_display = number_display.slice(0,-1)
    output.innerHTML=number_display
}

function delete_display(){
    number_display= ""
    output.innerHTML=number_display
}

let button_7 = document.getElementById("7")
button_7.addEventListener("click",()=>number_display_operation(button_7.innerHTML))
let button_8 = document.getElementById("8")
button_8.addEventListener("click",()=>number_display_operation(button_8.innerHTML))
let button_9 = document.getElementById("9")
button_9.addEventListener("click",()=>number_display_operation(button_9.innerHTML))
let button_division = document.getElementById("/")
button_division.addEventListener("click",()=>number_display_operation(button_division.innerHTML))

let button_4 = document.getElementById("4")
button_4.addEventListener("click",()=>number_display_operation(button_4.innerHTML))
let button_5 = document.getElementById("5")
button_5.addEventListener("click",()=>number_display_operation(button_5.innerHTML))
let button_6 = document.getElementById("6")
button_6.addEventListener("click",()=>number_display_operation(button_6.innerHTML))
let button_multiplicacion = document.getElementById("x")
button_multiplicacion.addEventListener("click",()=>number_display_operation(button_multiplicacion.innerHTML))

let button_1 = document.getElementById("1")
button_1.addEventListener("click",()=>number_display_operation(button_1.innerHTML))
let button_2 = document.getElementById("2")
button_2.addEventListener("click",()=>number_display_operation(button_2.innerHTML))
let button_3 = document.getElementById("3")
button_3.addEventListener("click",()=>number_display_operation(button_3.innerHTML))
let button_resta = document.getElementById("-")
button_resta.addEventListener("click",()=>number_display_operation(button_resta.innerHTML))



let button_0 = document.getElementById("0")
button_0.addEventListener("click",()=>number_display_operation(button_0.innerHTML))
let button_punto = document.getElementById(".")
button_punto.addEventListener("click",()=>number_display_operation(button_punto.innerHTML))
let button_mas = document.getElementById("+")
button_mas.addEventListener("click",()=>number_display_operation(button_mas.innerHTML))

function number_display_operation(n){
    if (encendido_button.innerHTML== "Off"){
        if (number_display.length<20){
            number_display = number_display + n
            output.innerHTML=number_display
        }
    }
}



//--------------Operaciones------------------------------------

let button_igual = document.getElementById("=")
button_igual.addEventListener("click",takeString)

function takeString(){
    let nuevo = (eval(number_display))
    let nuevo2= nuevo.toString()
    number_display = nuevo2
    output.innerHTML=number_display
}
