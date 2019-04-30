// Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti informazioni, facendo attenzione che il numero generato abbia senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per da 3 punti
// Una volta generato il “database”, il programma deve chiedere all’utente di inserire un Codice Giocatore e il programma restituisce le statistiche.

// creazione funzione per generare numeri random

function getCodNumber(min, max) {

  var numero = Math.floor(Math.random()*(max-min+1)+min);

  return numero;

}

// creazion funzione per generare Giocatori casuali

function genCodPlayer() {
  var codPlayer = '';
  var lettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeri = "0123456789";


  for (var i = 0; i < 3; i++) {

    codPlayer += lettere.charAt(Math.floor(Math.random() * lettere.length));
    console.log(codPlayer);
  }

  for (var i = 0; i < 3; i++){

    codPlayer += numeri.charAt(Math.floor(Math.random() * numeri.length));
    console.log(codPlayer);
  }


  return codPlayer;
  console.log(codPlayer);

}


// creazione Array DATABASE PLAYER CON LE RELATIVE CHIAVI

 var dataBasePlayers = [];

 for (var i = 0; i < 100; i++) {
   var nome = genCodPlayer();
   var puntiFatti = getCodNumber(0 , 60);
   var rimbalzi = getCodNumber(0 , 35);
   var falli = getCodNumber(0 , 25);
   var puntiDaDue = getCodNumber(0 , 100);
   var puntiDaTre = getCodNumber(0 , 100);

   dataBasePlayers.push({puntiFatti:puntiFatti,rimbalzi:rimbalzi,falli:falli,nome:genCodPlayer()});

}
console.log(dataBasePlayers);

var codicePlayerInserito = prompt('Inserire utente: ')

for (var i = 0; i < dataBasePlayers.length; i++) {

  var codicePlayer = dataBasePlayers[i];
  console.log(dataBasePlayers.nome);


  if (codicePlayerInserito == codicePlayer.nome) {

    for (var key in codicePlayer) {
      document.writeln(key + ';' + codicePlayer[key] + '<br>');

    }

  }

}
