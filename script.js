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
console.log("2)", nome, eta, staStudiandoTS);
// ____________________________________________________________________
// 3) Tipizzazione parametro funzione
var greet = function (name) {
    return "Ciao " + name;
};
console.log("3)", greet("Luigi"));
// ____________________________________________________________________
// 4) Specifica il tipo di ritorno della funzione
var sum = function (a, b) {
    return a + b;
};
console.log("4)", sum(5, 7));
// ____________________________________________________________________
// 5) Funzione che calcola il prezzo con IVA (22%)
var prezzoIVA = function (prezzo) {
    return prezzo * 1.22;
};
console.log("5)", prezzoIVA(100));
// ____________________________________________________________________
// 6) Funzione che concatena due stringhe e restituisce la lunghezza
var concatString = function (a, b) {
    return (a + b).length;
};
console.log("6)", concatString("Hello", "World"));
// ____________________________________________________________________
// 7) Type Union
var val;
val = "Ciao";
console.log("7)", val);
val = 123;
console.log("7)", val);
// ____________________________________________________________________
// 8) Variabile che può contenere numero, null o undefined
var numNullUnd;
numNullUnd = 42;
console.log("8)", numNullUnd);
numNullUnd = null;
console.log("8)", numNullUnd);
numNullUnd = undefined;
console.log("8)", numNullUnd);
var oggi = "Lunedì";
console.log("9)", oggi);
// ____________________________________________________________________
// 10) Array di numeri
var num1 = [1, 2, 3, 4];
var num2 = [1, 2, 3, 4];
console.log("10)", num1, num2);
// ____________________________________________________________________
// 11) Tupla con 3 stringhe e 2 numeri
var miaTupla = ["Davide", "D'Angelo", 22, "Roma", 2002];
console.log("11)", miaTupla);
var persona1 = { firstname: "Luigi", lastname: "Verdi", age: 40 };
console.log("13)", persona1);
var user1 = { email: "test@example.com" };
var user2 = { email: "test2@example.com", tel: 123456789 };
console.log("14)", user1, user2);
var student = [
    { name: "Marco", vote: 10 },
    { name: "Luca", vote: 8 },
];
console.log("15)", student);
var miaAuto = {
    marca: "fiat",
    modello: "punto",
    porte: 5,
};
console.log("17)", miaAuto);
// ____________________________________________________________________
// 18) Generics: funzione identità
function identita(valore) {
    return valore;
}
console.log("18)", identita("ciao"), identita(123));
var coppiaEsempio = {
    primo: "pippo",
    secondo: 999,
};
console.log("19)", coppiaEsempio);
var response = {
    data: "OK",
    success: true,
    message: "Tutto ok",
};
console.log("20)", response);
