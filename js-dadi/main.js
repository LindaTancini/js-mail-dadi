// genero un numero random da 1 a 6 per l'utente
let userScore = Math.floor(Math.random() * 6) + 1;
console.log(userScore);
// genero un numero random da 1 a 6 per il pc
let computerScore = Math.floor(Math.random() * 6) + 1;
console.log(computerScore);

// stabilisco chi è il vincitore del tiro con i dadi in base al numero più alto
// se user è più alto di pc allora vince
if (userScore > computerScore) {
  console.log("L'utente ha vinto!");
  //altrimenti se pc è più alto di user allora vince
} else if (computerScore > userScore) {
  console.log("Il computer ha vinto!");
  //E se è un pareggio?
} else {
  console.log("Pareggio!");
}
