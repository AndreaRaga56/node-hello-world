1. Creiamo la prima applicazione con NodeJs e inizializziamola con `npm init`
2. Scriviamo un file `app.js` che dovrà stampare nel terminale “Hello World”. Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.
3. Impostiamo ora uno script “start” in `package.json` e facciamo in modo di lanciare il nostro script con `npm run start`
4. Impostiamo un nuovo script “dev” in `package.json` che possa essere lanciato con `npm run dev` e che aggiorni in tempo reale le modifiche ai nostri file. Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. Dovremmo vedere il terminale senza fermare e rilanciare il server.
5. Proviamo a passare da terminale una parola come argomento. da mostrare dopo “Hello”. Dovremo quindi stampare “Hello *parola_passata”*
BONUS (da creare nei due file separati e con appositi comandi in package.json):
1. Pari o Dispari
Obiettivo: Scrivere uno script che verifica se un numero è pari o dispari.
Istruzioni:
Lo script deve accettare un numero come argomento dal terminale.
Stampare "Pari" se il numero è divisibile per 2, altrimenti "Dispari".
2. Conta le Vocali
Obiettivo: Calcolare quante vocali ci sono in una stringa fornita come argomento.
Istruzioni:
Lo script deve accettare una parola o frase come argomento dal terminale.
Calcolare e stampare quante vocali (a, e, i, o, u) sono presenti nella stringa.