const INPUT1=document.querySelector('#n1');
const INPUT2=document.querySelector('#n2');
INPUT1.addEventListener("keydown",teclado);
INPUT2.addEventListener("keydown",teclado);

function teclado(e){
    e.key==="Enter" && leer();
}

function leer(){
    const N1=Number(INPUT1.value.trim());
    const N2 = Number(INPUT2.value.trim());
    
      // comprobamos que ha escrito algo,no esta vacio
    //   (N1 === true && N2 === true)
      (N1 && N2)
      ? calcular(N1,N2)
      : vaciar();
}

function calcular(valor1,valor2){
    // minuto 17:30
    vaciar();
    escribir(`<h2>${valor1} x ${valor2}</h2>`);
    escribir(`<strong>Cálculo original</strong>: ${valor1*valor2}`);
    escribir(`<strong>Multiplicacion correcta</strong>:
     ${Number((valor1*valor2).toFixed(2))}`);
    escribir(`<strong>Resta correcta</strong>:
     ${Number((valor1-valor2).toFixed(2))}`);
    escribir(`<strong>Division correcta</strong>:
     ${Number((valor1/valor2).toFixed(2))}`);
    escribir(`<strong>Suma correcta</strong>:
     ${Number((valor1+valor2).toFixed(2))}`);
     

}

function escribir(valor){
    reiniciar();
    document.querySelector(".resultado").innerHTML+= `
    <div>${valor}</div>
    `;
}
// Ir a los inputs y vaciar despues del resultado
function reiniciar(){
    INPUT1.value="";
    INPUT2.value="1.1";
    INPUT1.focus();
}
    
function vaciar(){
    document.querySelector('.resultado').innerHTML="";
}