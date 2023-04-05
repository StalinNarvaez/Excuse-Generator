
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function quien(){
  return (Math.floor(Math.random()* who.length));
}
function accion(){
  return (Math.floor(Math.random()* action.length));
}
function que (){
  return Math.floor(Math.random()* what.length);
}
function cuando (){
  return Math.floor(Math.random()* when.length);
}
document.getElementById("excuse").innerHTML= who[quien()]+" "+action[accion()]+" "+what[que()]+" "+when[cuando()];

