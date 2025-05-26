// 1) Tipi primitivi principali in TypeScript:
// string
// number
// boolean
// null
// undefined
// symbol
// bigint
// ____________________________________________________________________
// 2) Tre variabili tipizzate
var nome = "Mario";
var eta = 30;
var staStudiandoTS = true;
// ____________________________________________________________________
// 3) Tipizzazione parametro funzione
// const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao" + name;
};
// ____________________________________________________________________
// 4) Specifica il tipo di ritorno della funzione:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) {
    return a + b;
};
// ____________________________________________________________________
// 5) Funzione che calcola il prezzo con IVA (22%):
var prezzoIVA = function (prezzo) {
    return prezzo * 1.22;
};
// ____________________________________________________________________
// 6) Funzione che concatena due stringhe e restituisce la lunghezza:
var concatString = function (a, b) {
    return (a + b).length;
};
// ____________________________________________________________________
// 7) Cos'è un Type Union e come si scrive?
// Un Type Union permette a una variabile di assumere più tipi.
// Si scrive con il simbolo | (pipe).
var val;
// ____________________________________________________________________
// 8) Variabile che può contenere numero, null o undefined:
var numNullUnd;
// ____________________________________________________________________
// 10) Array di numeri tipizzato nei due modi:
var num1 = [1, 2, 3, 4];
var num2 = [1, 2, 3, 4];
// ____________________________________________________________________
// 11) Tupla con 3 stringhe e 2 numeri:
var miaTupla = ["Davide", "D'Angelo", 22];
var student = [
    { name: "Marco", vote: 10 },
    { name: "Luca", vote: 8 },
];
// ____________________________________________________________________
// 17) Oggetto che implementa l’interfaccia Auto:
var miaAuto = {
    marca: "fiat",
    modello: "punto",
    porte: 5,
};
// ____________________________________________________________________
// 18) Cosa sono i Generics in TypeScript?
// I Generics permettono di creare componenti riutilizzabili che funzionano con diversi tipi mantenendo il tipo forte.
function identita(valore) {
    return valore;
}
