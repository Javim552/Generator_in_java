let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat ", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let palabra = "my homework";

window.onload = function() { // esta funcion es para cuando se carga la pagina. No es necesario llamarla desde afuera de la funcion. las variables se nombran tanto fuera como adentro.
  //write your code here

  let primerapalabra = who[Math.floor(Math.random() * 4)];
  let segundapalabra = what[Math.floor(Math.random() * 4)];
  let frase = when[Math.floor(Math.random() * 5)];

  let frasecompleta =
    primerapalabra + " " + segundapalabra + " " + palabra + " " + frase;
  console.log(frasecompleta);

  document.getElementById("excuse").innerHTML = frasecompleta;
};
