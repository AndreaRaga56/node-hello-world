// console.log("Hello World");
// console.log("Hello Boolean");
console.log(process.argv);

let parola = process.argv[2];
let numero = process.argv[3];
let contatore = 0;
const vocali = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

console.log(`Hello ${parola}`);

if (isNaN(numero)==true) {
    console.log("Non è stato inserito un numero");
} else if (numero % 2 == 0) {
    console.log("Numero Pari");
} else {
    console.log("Numero Dispari");
}

for(i=0; i<parola.length; i++){
    if (vocali.includes(parola[i])){
        contatore++;
    }    
};

console.log(`La parola inserita presenta ${contatore} vocali.`);