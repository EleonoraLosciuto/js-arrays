const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3]; // Index of fourth element is 3 as index start count at 0
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
// I use splice to replace one element of array
teachers.splice(4, 1, "Patrick"); // Delete elements starting from index 4, delete count 1 (delete one element), item to add "Patrick"
console.log(teachers);

// I could simply use teachers[4] = "Patrick"

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop(); // To remove last item I use pop()
console.log(lastTeacher, teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift(); // To remove first teacher I use shift()
console.log(firstTeacher, teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa"); // to add a new string at the end of the array I use push()
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah"); // to add a new string at the start of the array I use unshift()
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis"); // to find the index of a string I use indexOf()
console.log(lewisIndex);

// altro approccio
let idx = -1;
for (let i = 0; i < teachers.lenght; i++) {
  if (teachers[i] === "Lewis") idx 
}


// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;

if (isTeachersEmpty) {
  console.log(`l'array é vuoto`)}
else {
  console.log(`l'array non é vuoto: contiene ${teachers.length} elementi`)};

console.log(isTeachersEmpty);