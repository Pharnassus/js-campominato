// CAMPO MINATO-----------------------------------------------------------------------------------------------------------------------
// Il computer deve generare 16 numeri casuali tra 1 e 100.
var bombe = [];

while (bombe.length < 16) {
  var numeroCasuale100 = numeroCasuale(1, 101);

  var duplicato = controllaSeIlNumeroEsisteGia(numeroCasuale100, bombe);
  if (duplicato == false) {

    bombe.push(numeroCasuale100);
  }

}

console.log('array16: ', bombe);

// I numeri non possono essere duplicati.



// In seguito deve chiedere all’utente di inserire 84 volte un numero (uno alla volta),
// sempre compreso tra 1 e 100.



// L’utente non può inserire più volte lo stesso numero.



// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.



// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.



// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.












//-------------------------------------------------------------------------------------
// FUNZIONI
//-------------------------------------------------------------------------------------

function numeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//-------------------------------------------------------------------------------------

function controllaSeIlNumeroEsisteGia(numero, array) {
  var ePresente = false;
  for (var i = 0; i < array.length; i++) {

    if (numero == array[i]) {
      ePresente = true;
    }
  }
  if (ePresente == true) {
    return true;
  } else {
    return false;
  }
}

//-------------------------------------------------------------------------------------























//----------------------------------------------------------------------------------------------------------------------------
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
