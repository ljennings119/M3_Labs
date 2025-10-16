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
//a
// let twentyCents = 0.20
// let tenCents = 0.10

// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`) 

// let fixedTwenty = twentyCents.toFixed(2)
// let fixedTen = tenCents.toFixed(2)

// console.log(fixedTwenty + fixedTen) 
// // the toFixed() method converts a number into a string, the + operator concatenates the two strings. 

//b
// function currencyAddition(float1, float2) {
//   // Convert both to cents to avoid floating-point precision issues
//   const result = (float1 * 100 + float2 * 100) / 100;
  
//   // Round to 2 decimal places and return as a number
//   return Number(result.toFixed(2));
// }

// console.log(currencyAddition(0.1, 0.2)); 
// console.log(currencyAddition(1.335, 2.675)); 

//c
// function currencyOperation(float1, float2, operation, numDecimals = 2) {
//   // Ensure numDecimals is within safe range
//   if (numDecimals < 1 || numDecimals > 10) {
//     throw new Error("numDecimals must be between 1 and 10");
//   }

//   // Scale factor based on desired decimal places
//   const scale = Math.pow(10, numDecimals);

//   // Convert to integer units to avoid floating point issues
//   const value1 = Math.round(float1 * scale);
//   const value2 = Math.round(float2 * scale);

//   let result;

//   switch (operation) {
//     case '+':
//       result = (value1 + value2) / scale;
//       break;
//     case '-':
//       result = (value1 - value2) / scale;
//       break;
//     case '*':
//       result = (value1 / scale) * (value2 / scale);
//       break;
//     case '/':
//       if (float2 === 0) throw new Error("Division by zero");
//       result = (value1 / scale) / (value2 / scale);
//       break;
//     default:
//       throw new Error("Invalid operation. Use '+', '-', '*', or '/'.");
//   }

//   // Round and return result with the correct decimal precision
//   return Number(result.toFixed(numDecimals));
// }

// console.log(currencyOperation(0.1, 0.2, '+', 2));    // 0.30
// console.log(currencyOperation(1.335, 2.675, '+', 3)); // 4.010
// console.log(currencyOperation(2.5, 1.25, '*', 4));    // 3.1250
// console.log(currencyOperation(1, 3, '/', 6));         // 0.333333

//d
function currencyAddition(float1, float2) {
  const cents1 = Math.round(float1 * 100);
  const cents2 = Math.round(float2 * 100);
  const totalCents = cents1 + cents2;
  return totalCents / 100;
}

function currencyOperation(float1, float2, operation, numDecimals = 2) {
  if (numDecimals < 1 || numDecimals > 10) {
    throw new Error("numDecimals must be between 1 and 10");
  }

  const scale = Math.pow(10, numDecimals);
  const value1 = Math.round(float1 * scale);
  const value2 = Math.round(float2 * scale);
  let result;

  switch (operation) {
    case '+':
      result = (value1 + value2) / scale;
      break;
    case '-':
      result = (value1 - value2) / scale;
      break;
    case '*':
      result = (value1 / scale) * (value2 / scale);
      break;
    case '/':
      if (float2 === 0) throw new Error("Division by zero");
      result = (value1 / scale) / (value2 / scale);
      break;
    default:
      throw new Error("Invalid operation. Use '+', '-', '*', or '/'.");
  }

  return Number(result.toFixed(numDecimals));
}



console.log(0.3 == currencyAddition(0.1, 0.2));       
console.log(0.3 == currencyOperation(0.1, 0.2, '+')); 
console.log(0.3 == currencyOperation(0.4, 0.2, '+')); 
console.log(0.3 == currencyOperation(0.5, 0.2, '-')); 

