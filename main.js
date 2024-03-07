/* Traccia 1:
Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.
Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
ogni dado ha 6 facce
ogni giocatore tirerà il dado n volte
Per ogni giocatore:
generare un numero casuale per ogni tiro che effettuera’,
ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.

TIPS:
Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (7 - 1) + 1);
 */
let player1 = 0;
let player2 = 0;
let p1name = prompt(`Nome giocatore 1`)
let p2name = prompt(`Nome giocatore 2`)
let roll = parseInt(prompt(`quanti tiri vuoi effettuare ?`))
// Inizio del gioco
function dadi() {

    for (let i = 1; i <= roll; i++) {
        //    console.log(Math.floor(Math.random() * (7 - 1) + 1)); 

        player1 = player1 + Math.floor(Math.random() * (7 - 1) + 1);

        player2 = player2 + Math.floor(Math.random() * (7 - 1) + 1);
    }
    return;
}

console.log(`Il ${p1name} ha totalizzato: ${player1} punti`);
console.log(`Il ${p2name} ha totalizzato: ${player2} punti`);
 * /

/* Traccia 2:
Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:
N dovra’ rappresentare il parametro formale della funzione
tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'*/



let nmax = parseInt(prompt(`inserisci un numero`))
function numb(nmax) {
    for (let i = 1; i <= nmax; i++) {
        if (i % 15 == 0) {
            return 'FizzBuzz';
        } else if (i % 5 == 0) {
            return ('Buzz');
        } else if (i % 3 == 0) {
            return 'Fizz';
        } else {
            return i;
        }
    }

}
console.log(numb(nmax))

/*Traccia 3:
Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.
Esempio:
Input : 9 → output: 1 cifra
Input : 99 → output: 2 cifre
Input: 12000 → output: Numero troppo grande*/

let num = parseInt(prompt(`inserisci un numero`))

function cifrenumero(num) {
    if (num > 0 && num <= 9) {
        return `il numero ha una cifra`;
    }
    else if (num <= 99) {
        return `il numero ha 2 cifre`;
    }
    else if (num <= 999) {
        return `il numero ha 3 cifre`;
    }
    else if (num <= 9999) {
        return `il numero ha 4 cifre`;
    }
    else if (num < 12000) {
        return `numero troppo grande`;
    }
}
console.log(cifrenumero(num));


/*Traccia 4:
Scrivere una funzione che simuli un distributore di bevande:
fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza (modificato)
Potete provare ad inserire condizioni e controlli ulteriori se volete sperimentare. Stupitemi!*/
let sel = prompt(`Selona la Bevanda \n (1) acqua \n (2) coca cola \n (3) Birra`);

function distributore(sel) {

    while (sel != 1 && sel != 2 && sel != 3) {
        sel = prompt(`Selona la Bevanda \n (1) acqua \n (2) coca cola \n (3) Birra`);
    }
    if (sel == 1) {
        return `é stata selezionata l'acqua`;
    }
    else if (sel == 2) {
        return `è stata selezionata Coca Cola`;
    }
    else if (sel == 3) {
        return `è stata selezionata la birra`;
    }
}
console.log(distributore(sel))

