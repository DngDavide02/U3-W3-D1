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
const nome: string = "Mario";
const eta: number = 30;
const staStudiandoTS: boolean = true;
console.log("2)", nome, eta, staStudiandoTS);
// ____________________________________________________________________
// 3) Tipizzazione parametro funzione
const greet = (name: string): string => {
  return "Ciao " + name;
};
console.log("3)", greet("Luigi"));
// ____________________________________________________________________
// 4) Specifica il tipo di ritorno della funzione
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log("4)", sum(5, 7));
// ____________________________________________________________________
// 5) Funzione che calcola il prezzo con IVA (22%)
const prezzoIVA = (prezzo: number): number => {
  return prezzo * 1.22;
};
console.log("5)", prezzoIVA(100));
// ____________________________________________________________________
// 6) Funzione che concatena due stringhe e restituisce la lunghezza
const concatString = (a: string, b: string): number => {
  return (a + b).length;
};
console.log("6)", concatString("Hello", "World"));
// ____________________________________________________________________
// 7) Type Union
let val: string | number;
val = "Ciao";
console.log("7)", val);
val = 123;
console.log("7)", val);
// ____________________________________________________________________
// 8) Variabile che può contenere numero, null o undefined
let numNullUnd: number | null | undefined;
numNullUnd = 42;
console.log("8)", numNullUnd);
numNullUnd = null;
console.log("8)", numNullUnd);
numNullUnd = undefined;
console.log("8)", numNullUnd);
// ____________________________________________________________________
// 9) Tipo per i giorni della settimana
type GiornoSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";
const oggi: GiornoSettimana = "Lunedì";
console.log("9)", oggi);
// ____________________________________________________________________
// 10) Array di numeri
const num1: number[] = [1, 2, 3, 4];
const num2: Array<number> = [1, 2, 3, 4];
console.log("10)", num1, num2);
// ____________________________________________________________________
// 11) Tupla con 3 stringhe e 2 numeri
const miaTupla: [string, string, number, string, number] = ["Davide", "D'Angelo", 22, "Roma", 2002];
console.log("11)", miaTupla);
// ____________________________________________________________________
// 12) Differenza tra type e interface:
// interface è usata per descrivere strutture di oggetti e può essere estesa da altre interfacce.
// type può rappresentare qualsiasi tipo, anche union e primitive, ma non è estendibile nello stesso modo.
// Con interface puoi fare merge declaration, con type no.
// ____________________________________________________________________
// 13) Interfaccia Persona
interface Persona {
  firstname: string;
  lastname: string;
  age: number;
}
const persona1: Persona = { firstname: "Luigi", lastname: "Verdi", age: 40 };
console.log("13)", persona1);
// ____________________________________________________________________
// 14) Interfaccia User con campo opzionale
interface User {
  email: string;
  tel?: number;
}
const user1: User = { email: "test@example.com" };
const user2: User = { email: "test2@example.com", tel: 123456789 };
console.log("14)", user1, user2);
// ____________________________________________________________________
// 15) Array tipizzato di oggetti "Studente"
interface Student {
  name: string;
  vote: number;
}
const student: Student[] = [
  { name: "Marco", vote: 10 },
  { name: "Luca", vote: 8 },
];
console.log("15)", student);
// ____________________________________________________________________
// 16-17) Interfaccia Auto ed oggetto implementato
interface Veicolo {
  marca: string;
  modello: string;
}
interface Auto extends Veicolo {
  porte: number;
}
const miaAuto: Auto = {
  marca: "fiat",
  modello: "punto",
  porte: 5,
};
console.log("17)", miaAuto);
// ____________________________________________________________________
// 18) Generics: funzione identità
function identita<T>(valore: T): T {
  return valore;
}
console.log("18)", identita<string>("ciao"), identita<number>(123));
// ____________________________________________________________________
// 19) Più tipi generici in un’interfaccia
interface Coppia<A, B> {
  primo: A;
  secondo: B;
}
const coppiaEsempio: Coppia<string, number> = {
  primo: "pippo",
  secondo: 999,
};
console.log("19)", coppiaEsempio);
// ____________________________________________________________________
// 20) Interfaccia generica per API
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
const response: ApiResponse<string> = {
  data: "OK",
  success: true,
  message: "Tutto ok",
};
console.log("20)", response);
