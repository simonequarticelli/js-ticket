// variabili //

var km=prompt('Quanti km vuoi percorrere?');
var prezzo= km * 0.21;
var età=prompt('Quanti anni hai?');
var sconto_young= prezzo * 20 / 100;
var sconto_old= prezzo * 40 / 100;
var tot_young= prezzo - sconto_young;
var tot_old= prezzo - sconto_old;
var d = new Date();

// console.log //

console.log (prezzo);
console.log (prezzo - sconto_young);
console.log (prezzo - sconto_old);
console.log (d);

// logica //

if (età <= 18){
  tot_young;
  alert('paghi € ' + tot_young);
  alert('Grazie per l\'acquisto')
} else if (età >= 65){
  tot_old;
  alert('paghi € ' + tot_old);
  alert('Grazie per l\'acquisto')
} else{
  prezzo;
  alert('paghi € ' + prezzo);
  alert('Grazie per l\'acquisto')
}
