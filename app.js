function palabraAleatoria(lista){
  let aleatorio= Math.floor(Math.random()* lista.length);
  return lista[aleatorio];
}

let listaQuien = ['The dog','My grandma','His turtle','My bird'];
let listaAccion = ['ate','peed','crushed','broke'];
let listaQue = ['my homework', 'the keys', 'the car'];
let listaDonde = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let quien = palabraAleatoria (listaQuien);
let accion = palabraAleatoria(listaAccion);
let que = palabraAleatoria (listaQue);
let donde = palabraAleatoria(listaDonde);

document.getElementById("excuse").innerHTML= quien+" "+accion+" "+que+" "+donde;

