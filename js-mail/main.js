// creo una lista di email (array)
const emails = [
  "linda@gmail.com",
  "luigi@gmail.com",
  "leone@gmail.com",
  "fumetto@gmail.com",
];
console.log(emails);
// chiedo all'utente la sua email
let mailAddress = prompt("Inserisci l'indirizzo email");
console.log("La tua email è: " + mailAddress);
//creo una variabile con valore booleano iniziale "false"
let access = false;
// la tua email è presente nella lista? creo un ciclo for
for (let i = 0; i < emails.length; i++) {
  if (emails[i] === mailAddress) {
    access = true;
    break; // interrompo il ciclo
  }
}
// Si, è presente. No, non è presente (stampo)
if (access) {
  alert("Sei dentro alla festa!");
} else {
  alert("Non sei nella lista invitati.");
}
