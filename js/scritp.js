// chedi ad un utente una parola
// crea una funzione in cui verifichi se quella parola è palidroma o no


    // // chiedo all'utente la parola
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

    // funzione
    function palindroma(parola) {
         // divido la parola in lettere, la rigiro, la ri unisco   
        let parolaInversa = parola.split("").reverse().join("");
        
        // se parolaInversa == parola allora la parola scelta è palindroma altrimenti no
        if(parolaInversa == parola) {
            console.log("la parola scelta è palindroma")
        } else {
            console.log("la parola scelta non è palindroma")
        }

      console.log(parolaInversa)
    }
    
   console.log(palindroma(prompt("digita una parola")));

