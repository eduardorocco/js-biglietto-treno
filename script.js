console.log('Ciao')

//PREZZO al km = 0.21 euro
// 20 % ai minorenni
// 40 % agli over 65
//output prezzo finale max 2 cifre dopo la virgola

//FORMULA PER IL CALCOLO DELLO SCONTO = sconto = prezzo * 20 / 100

const userKm =  parseInt(prompt('Inserisci i kilometri da percorrere:')) //km dell'utente
const userAge = parseInt(prompt('Inserisci la tua età:'))  //età utente

//console.log(userKm, userAge)

// x km * 0.21 euro = costo al km
// costo al km - eventuale sconto = costo del biglietto

// SE minorenne applica 20%
// ALTRIMENTI SE over 65 applica 40%

