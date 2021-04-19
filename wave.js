// Doe de wave!

// Schrijf een functie die een string neemt als input
// De functie geeft een array terug, waarbij één voor één elke letter een HOOFDLETTER is

// Opdracht 1
// wave("hello") // geeft ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//declareren van de string

// loop maken waarbij de uitkomst hoofdletters maakt


const wave = []; //vast een array klaar zetten "scope"
function waver (string) {
    wave.length = 0;
    for (i = 0; i < string.length; i++) {
        //capStrng = tekst aan de voorkant van 0 tot aan positie hoofdletter
        //dan hoofdletter op de i'de positie
        //dan originele kleine letters na de i'de positie
        capStrng = string.substring(0, i).toLowerCase() + string.charAt(i).toUpperCase() + string.substring(i + 1).toLowerCase();
        //console.log (upper);
        wave.push(capStrng); //aangepaste strings toevoegen aan array
    }
    return wave;
}
console.log("Opdracht 1:");
waver("gaetan");
console.log("gaetan wordt: "+ wave);

console.log("Opdracht 2:")
waver("mSnTaaL");
console.log("mSnTaaL wordt: "+ wave);

console.log("Opdracht 3:")
waver("hi-ya"); //ik heb niks hoeven aanpassen om het - teken overgeslagen te krijgen...
console.log("hi-ya wordt: "+ wave);



// Opdracht 2
// Pas de functie zo aan, dat alle letters behalve de 'wave'-letter, klein zijn
// wave("mSnTaaL") // geeft ['Msntaal','mSntaal','msNtaal','msnTaal','msntAal','msntaAl','msntaaL']

// Opdracht 3
// Pas de functie zo aan, dat andere symbolen de wave niet onderbreken
// Dus geen 'hi-ya' in allemaal kleine letters, omdat het streepje (-) dat geen hoofdletter kan worden, wordt overgeslagen. Hint: 'a' !== 'A', maar '-' === '-'
// wave("Hi-Ya") / geeft [ 'Hi-ya', 'hI-ya', 'hi-Ya', 'hi-yA']
