//QUESTION 1:
// function ucFirstLetters(str) {
//     return str
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ')
// }
// console.log(ucFirstLetters("los angeles"))
// console.log(ucFirstLetters("san antonio"))
// console.log(ucFirstLetters("nightmare before christmas"))


//QUESTION 2:
// function truncate(str, max) {
//     if (str.length > max) {
//         return str.slice(0, max) + "..."
//     } else {
//         return str
//     }
// }

// function truncate(str, max) { //conditional operator
//     return str.length > max ? str.slice(0, max) + "..." : str
// }
// console.log(truncate('This text will be truncated if it is too long', 25))


//QUESTION 3:
// const animals = ['Tiger', 'Giraffe']
// console.log(animals)

// animals.push('Lion', 'Bear') //adding 2 values at the end
// console.log(animals)

// animals.unshift('Duck', 'Goat') // adding 2 values at the beginning
// console.log(animals)

// animals.sort() // sort animals alphabetically
// console.log(animals)

// function replaceMiddleAnimal(newValue) { // replaces a new value in the middle
//     const middleIndex = Math.floor(animals.length / 2)
//     animals[middleIndex] = newValue
// }

// replaceMiddleAnimal('Monkey')
// console.log(animals)

// function findMatchingAnimals(beginsWith) {
//     return animals.filter(animal =>
//         animal.toLowerCase().startsWith(beginsWith.toLowerCase())
//     )
// }

// console.log(findMatchingAnimals('l'))
// console.log(findMatchingAnimals('g'))
// console.log(findMatchingAnimals('B'))
// console.log(findMatchingAnimals('T'))


//QUESTION 4:
// function camelCase(cssProp) {
//     return cssProp
//     .split('-')
//     .map((word, index) =>
//         index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
//     .join('')
// }

// function camelCase(cssProp) {
//   const parts = cssProp.split('-');
//   let result = parts[0];

//   for (let i = 1; i < parts.length; i++) {
//     result += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
//   }

//   return result;
// }

// function camelCase(cssProp) {
//   const parts = cssProp.split('-');
//   let result = '';
//   let index = 0;

//   for (const part of parts) {
//     result += index === 0 
//       ? part 
//       : part.charAt(0).toUpperCase() + part.slice(1);
//     index++;
//   }

//   return result;
// }

// console.log(camelCase('margin-left'))
// console.log(camelCase('background-image'))
// console.log(camelCase('display'))


//QUESTION 5: