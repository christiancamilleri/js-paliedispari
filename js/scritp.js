

// ESERCIZIO 1 PALINDROMA

// chedi ad un utente una parola
// crea una funzione in cui verifichi se quella parola è palidroma o no


    // chiedo all'utente la parola
    // let word = prompt("digita una parola e ti dirò se è palidroma o no");
    
    // // divido la parola in lettere
    // let wordSplit = word.split("");

    // console.log(word + " " + wordSplit)
    
    // // inverto l'ordine delle lettere
    // wordSplit = wordSplit.reverse();
    // console.log(wordSplit);

    // // riunisco le lettere per formalela parola al contrario
    // invertWord = wordSplit.join("");
    // console.log(invertWord)

    // // verifico se la parola invertitaè uguale alla parola iniziale
    // if(word == invertWord) {
    //     console.log("è palindroma!")
    // } else {
    //     console.log("la parola inserita non è una parola palindroma")
    // }
     
    // bersaglio input html
    let wordElement = document.getElementById("word");
    let verificaEl = document.getElementById("verifica");
    let risposteEl = document.getElementById("risposte");
    console.log(wordElement + verificaEl + risposteEl);


    // creo evento al clik del bottone
    verificaEl.addEventListener("click", function(){

        // se parolaInversa == parola allora la parola scelta è palindroma altrimenti no
        if(isPalindrome(wordElement.value)) {
                // creo elemento in html
                risposteEl.innerText = "è palindroma"; 
    
        } else {
             // creo elemento in html
             risposteEl.innerText = "non è palindroma"; 
        }

        wordElement.value = "";

    });

    
    
    function isPalindrome(parola) {
        
        // divido la parola in lettere, la rigiro, la ri unisco   
        let parolaInversa = parola.split("").reverse().join("");
        console.log(parolaInversa);

        if (parola == parolaInversa) {
            return true;
        } else {
            return false;
        }    
    }

    
// ---------------------------------------------------------------------

// ESERCIZIO 2 PARI O DISPARI


// utente sceglie pari o dispari
// digita un numero da 1 a 5
// generiamo un numero da 1 a 5 per il pc usando una funzione
// sommiamo i due numeri
// stabliamo se la somma dei due numeri è pari o dispari usando una funzione
// dichiariamo chi ha vinto 

// bersaglio elementi html
let sceltaEl = document.getElementById("scelta");
let playEl = document.getElementById("play");
let sceltaNumeroEl = document.getElementById("scelta-numero")
// console.log(sceltaEl.value + playEl + sceltaNumeroEl.value)
// console.log(sceltaEl.value)


// console.log(newNumber)

// sommiamo i 2 numeri alla pressione del bottone q
playEl.addEventListener("click", function() {
    let newNumber = randomNumber(1,5);
    
    let somma = (newNumber + parseInt(sceltaNumeroEl.value));
    console.log( "scelta", sceltaEl.value)
    console.log("numero utente", sceltaNumeroEl.value)
    console.log( "numero pc", newNumber)
    console.log( "somma", somma)
    console.log("è pari o dispari?", parioDispari(somma))
    
    // parioDispari(somma);

    if (parioDispari(somma) == sceltaEl.value) {
        console.log("hai vinto")
    } else {
        console.log("hai perso")
    }
    


})

// --------------------------------------------------


// creo funzione per pc per generare numero random 
function randomNumber(min, max) {
    
    let random = Math.floor(Math.random() * (max - min + 1) + min);

    return random;
}

/**
 * ritorna "pari" se num è pari, altrimenti "dispari"
 * @param {number} num
 * @returns {string}
 */
function parioDispari(num) {
    
    if(num % 2 == 0){
        
        return "pari"
        
    } else {
        
        return "dispari"
    }
    
}

