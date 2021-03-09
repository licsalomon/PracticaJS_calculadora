
var numero1 = parseFloat(document.getElementById("numero1").value);
var numero2 = parseFloat(document.getElementById("numero2").value);

const suma = (Event) => {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    let suma2numeros = numero1 + numero2;
    return document.getElementById("respuesta").innerHTML = suma2numeros;
    Event.preventDefault()
};



const resta = (Event) => {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resta2numeros = numero1 - numero2;
    return document.getElementById("respuesta").innerHTML = resta2numeros;
       
    Event.preventDefault()
    };

const multi = (Event) => {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value)
    var multi2numeros = numero1 * numero2;
    return document.getElementById("respuesta").innerHTML = multi2numeros;
    Event.preventDefault()
    };
const division = (Event) => {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value)
    var division2numeros = numero1 / numero2;
    return document.getElementById("respuesta").innerHTML = division2numeros;
    Event.preventDefault()
    };
