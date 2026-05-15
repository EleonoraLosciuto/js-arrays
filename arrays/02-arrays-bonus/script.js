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
const reversedTeachers = []; // I declare the array initially as empty

for (i = 0; i < teachers.length; i++) // loop for for each element of the array
{
  reversedTeachers.unshift(teachers[i]); // I use unshift to add every element at the beginning of the array, returning the reversed array
}

console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (i = 0; i < teachers.length; i++) // same as above
{
  if (teachers[i].length > 4) longNames.push(teachers[i]); // if function to check if the element lenght is >= 5
}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf("Ed"), 1)
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;