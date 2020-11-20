// CAMPO MINATO-----------------------------------------------------------------------------------------------------------------------
// Il computer deve generare 16 numeri casuali tra 1 e 100.
var bombe = [];

while (bombe.length < 16) {
  var numeroCasuale100 = numeroCasuale(1, 100);

  // I numeri non possono essere duplicati.
  var verifica = controllaSeIlNumeroEsisteGia(numeroCasuale100, bombe);
  if (verifica == false) {

    bombe.push(numeroCasuale100);
  }

}
console.log('bombe: ', bombe.sort());


// In seguito deve chiedere all’utente di inserire 84 volte un numero (uno alla volta),
// sempre compreso tra 1 e 100.
var numeroMassimoPossibilita = 100 - 16;
var tentativi = [];
var punteggio = 0;

var perso = false;
while (tentativi.length < numeroMassimoPossibilita && perso == false) {
  var numeroUtente = parseInt(prompt('inserisci un numer otra 1 e 100'));
  // L’utente non può inserire più volte lo stesso numero.
  var controllo = controllaSeIlNumeroEsisteGia(numeroUtente, tentativi);
    console.log('controllo: ', controllo);
  var controlloBombe = controllaSeIlNumeroEsisteGia(numeroUtente, bombe)
    console.log('controlloBombe: ', controlloBombe);

    // La partita termina quando il giocatore inserisce un numero “vietato”
    // Se il numero è presente nella lista dei numeri generati, la partita termina,
  if (controlloBombe == true) {
    alert('Hai perso');
    perso = true;

    // Se il numero non è presente nella lista dei numeri generati si continua chiedendo all’utente un altro numero.
    // La partita termina quando raggiunge il numero massimo possibile di numeri consentiti.
  } else if (controllo == false) {
    tentativi.push(numeroUtente);

    if (!isNaN(numeroUtente)) {
      punteggio++
    }
  }

}
console.log('tentativi: ', tentativi);

// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
alert('Punteggio finale: ' + punteggio);
console.log('punteggio: ', punteggio);



// BONUS:
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50









//-------------------------------------------------------------------------------------
// FUNZIONI
//-------------------------------------------------------------------------------------

function numeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//-------------------------------------------------------------------------------------

function controllaSeIlNumeroEsisteGia(numero, array) {
  var trovato = false;
  for (var i = 0; i < array.length; i++) {

    if (numero == array[i]) {
      trovato = true;
    }
  }
  if (trovato == true) {
    return true;
  } else {
    return false;
  }
}

//-------------------------------------------------------------------------------------
