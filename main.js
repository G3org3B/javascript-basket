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

// creazion funzione per generare numeri random

function getRandomLetter () {
  
  var lettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  var codPlayer = lettere.charAt(Math.floor(Math.random() * lettere.length));

  return codPlayer;
}


// creazione Array DATABASE PLAYER CON LE RELATIVE CHIAVI

 var databasePlayers = [];

 var palyer = {

   'codplayer': '',
   'puntiFatti': '',
   'rimbalziFatti': '',
   'falli': '',

  }
