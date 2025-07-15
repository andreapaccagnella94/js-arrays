const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (let index = teachers.length - 1; index >= 0; index--) {
  reversedTeachers.push(teachers[index]);
}
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

//👀OCCHIO BISOGNA SEMPRE DEFINIRE LA VARIABILE ALL'INIZIO CHE TI DA AD OGNI ITERAZIONE
/* CE LO CONSIGLI ANCHE EMMET

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

*/

for (let index = 0; index < teachers.length; index++) {
  if (teachers[index].length >= 5) {

    //console.log(teachers[index]);
    longNames.push(teachers[index]);
  }
}
console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers
const indexEd = teachers.indexOf("Ed");
teachers.splice(indexEd, 1);
console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
/* SBAGLIATO
const isFabioPresent = teachers.indexOf("Fabio");
console.log(isFabioPresent);

*/

//CORRETTO VEDI VIDEO-LEZIONE
let isFabioPresent = null;

for (index = 0; index < teachers.length; index++) {
  const teacher = teachers[index];
  if (teacher === "Fabio") {
    isFabioPresent = true;
    break
  }
}

console.log(isFabioPresent);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;