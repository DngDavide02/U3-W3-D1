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
// ____________________________________________________________________
// 3) Tipizzazione parametro funzione
// const greet = (name) => { return "Ciao " + name }
const greet = (name: string): string => {
  return "Ciao" + name;
};
// ____________________________________________________________________
// 4) Specifica il tipo di ritorno della funzione:
// const sum = (a: number, b: number) => { return a + b }
const sum = (a: number, b: number): number => {
  return a + b;
};
// ____________________________________________________________________
// 5) Funzione che calcola il prezzo con IVA (22%):
const prezzoIVA = (prezzo: number): number => {
  return prezzo * 1.22;
};
// ____________________________________________________________________
// 6) Funzione che concatena due stringhe e restituisce la lunghezza:
const concatString = (a: string, b: string): number => {
  return (a + b).length;
};
// ____________________________________________________________________
// 7) Cos'è un Type Union e come si scrive?
// Un Type Union permette a una variabile di assumere più tipi.
// Si scrive con il simbolo | (pipe).
let val: string | number;
// ____________________________________________________________________
// 8) Variabile che può contenere numero, null o undefined:
let numNullUnd: number | null | undefined;
// ____________________________________________________________________
// 9) Tipo per i giorni della settimana con union di stringhe:
type GiornoSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";
// ____________________________________________________________________
// 10) Array di numeri tipizzato nei due modi:
const num1: number[] = [1, 2, 3, 4];
const num2: Array<number> = [1, 2, 3, 4];
// ____________________________________________________________________
// 11) Tupla con 3 stringhe e 2 numeri:
const miaTupla: [string, string, number] = ["Davide", "D'Angelo", 22];
// ____________________________________________________________________
// 12) Differenza tra type e interface:
// interface è usata per descrivere strutture di oggetti e può essere estesa da altre interfacce.
// type può rappresentare qualsiasi tipo, anche union e primitive, ma non è estendibile nello stesso modo.
// Con interface puoi fare merge declaration, con type no.
// ____________________________________________________________________
// 13) Interfaccia con firstname, lastname e age:
interface Persona {
  firstname: string;
  lastname: string;
  age: number;
}
// ____________________________________________________________________
// 14) Interfaccia con email obbligatoria e telefono opzionale:
interface User {
  email: string;
  tel?: number;
}
// ____________________________________________________________________
// 15) Array tipizzato di oggetti "Studente":
interface Student {
  name: string;
  vote: number;
}

const student: Student[] = [
  { name: "Marco", vote: 10 },
  { name: "Luca", vote: 8 },
];
// ____________________________________________________________________
// 16) Interfaccia base Veicolo ed estesa Auto:
interface Veicolo {
  marca: string;
  modello: string;
}

interface Auto extends Veicolo {
  porte: number;
}
// ____________________________________________________________________
// 17) Oggetto che implementa l’interfaccia Auto:
const miaAuto: Auto = {
  marca: "fiat",
  modello: "punto",
  porte: 5,
};
// ____________________________________________________________________
// 18) Cosa sono i Generics in TypeScript?
// I Generics permettono di creare componenti riutilizzabili che funzionano con diversi tipi mantenendo il tipo forte.
function identita<T>(valore: T): T {
  return valore;
}
// ____________________________________________________________________
// 19) È possibile avere più tipi generici in un’interfaccia?
// Sì, è possibile usare più generics.
interface Coppia<A, B> {
  primo: A;
  secondo: B;
}
// ____________________________________________________________________
// 20) Interfaccia generica per una risposta API:
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
