const PI = 3.14;

function sumar(x, y) 
{
    let Resultado= x + y;
    return Resultado;
}
const multiplicar = (a, b) => a * b;
function restar(w,z)
{
    let resta= w-z;
    return resta;
}
const dividir =(j, u) => j/u;
    
let numeros = ["dos", "cuantro","ocho", "diez"];
// Exporto todo lo que yo quiero exponer del módulo:
export {PI, sumar, multiplicar, restar, dividir, numeros};