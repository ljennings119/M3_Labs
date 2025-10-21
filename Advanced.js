//Question 1:
//a
// function makeCounter() {
//     let currentCount = 0;

//     return function() {
//         currentCount++;
//         console.log(currentCount);
//         return currentCount;
//     };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// counter1();
// counter1();

// counter2();
// counter2();

//b
// function makeCounter(startFrom) {
//     let currentCount = startFrom;

//     return function() {
//         currentCount++;
//         console.log(currentCount);
//         return currentCount;
//     };
// }

// let counter1 = makeCounter(0);
// let counter2 = makeCounter(10);

// counter1();
// counter1();

// counter2();
// counter2();

//c
// function makeCounter(startFrom, incrementBy) {
//     let currentCount = startFrom;

//     return function() {
//         currentCount += incrementBy;
//         console.log(currentCount);
//         return currentCount;
//     };
// }

// let counter1 = makeCounter(0, 1);
// let counter2 = makeCounter(10, 5);

// counter1();
// counter1();

// counter2();
// counter2();

//Question 2:
//a - # 3 print first and then # 4 will print right after because it doesn't matter if you put 0ms or leave it blank, then #2 then #1. the code is read in order.

//b
// const delayMsg = (msg) => {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }

// c
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')
// setTimeout(delayMsg, 11000, "Delayed by 11 seconds")

//d
// const fifthTest = setTimeout(delayMsg, 11000, '#5: Delayed by 11 seconds')
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')
// setTimeout(delayMsg, 11000, "Delayed by 11 seconds")
// clearTimeout(fifthTest)

//Question 3:
// //c
// function printMe(msg) {
//     console.log(`printing debounced message: ${msg}`)
// }

// //b
// function debounce(func, ms = 1000) {
//     let timeout

//     //a
//     return (...args) => {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             func(...args)
//         }, ms)
//     };
// }

// setTimeout(() => printMe('#1'), 100)
// setTimeout(() => printMe('#2'), 200)
// setTimeout(() => printMe('#3'), 300)

//Question 4:
//a
// function printFibonacci() {
//     let a = 0, b = 1
//     console.log(b)

//     const intervalId = setInterval(() => {
//         const next = a + b
//         console.log(next)
//         a = b
//         b = next
//     }, 1000)
// }

// printFibonacci()

//b
// function printFibonacciTimeouts() {
//     let a = 0, b = 1

//     function printNext() {
//         console.log(b)
//         const next = a + b
//         a = b
//         b = next
//         setTimeout(printNext, 1000)
//     }
//     printNext()
// }
// printFibonacciTimeouts()

//c
// function printFibonacci(limit) {
//     let a = 0, b = 1, count = 1
//     console.log(b)

//     const intervalId = setInterval(() => {
//         const next = a + b
//         console.log(next)

//         a = b
//         b = next
//         count++

//         if (count >= limit) {
//             clearInterval(intervalId)
//             console.log('Fibonacci sequence complete.')
//         }
//     }, 1000);
//     }

// printFibonacci(10)

//Question 5:
// setTimeout is not calling the object anymore because it's no longer tied to the car
//a
// let car = {
//     make: "Porshe",
//     model: "911",
//     year: 1964,

//     description() {
//         console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//         },
//     }

// car.description()
// setTimeout(() => car.description(), 200)

//b
// let newCar = { ...car, year: 2025}
// newCar.description()

//c
// it uses the original value because the it ignores the clone

//d
// car.description = car.description.bind(car)
// setTimeout(car.description, 200)

// //e
// let newerCar = { ...car, model: "Cayman" }
// newerCar.description()
// setTimeout(newerCar.description, 200)
// setTimeout(car.description, 200)

//Question 6:
//a
// function multiply(a, b) {
//   console.log(a * b);
// }

// Function.prototype.delay = function (ms) {
//   const originalFunction = this;

//   return function (a, b) {
//     setTimeout(() => originalFunction(a, b), ms);
//   };
// };

// multiply.delay(500)(5, 5);

//b
// Function.prototype.delay = function (ms) {
//   const originalFunction = this;

//   return function (...args) {
//     setTimeout(() => originalFunction.apply(this, args), ms);
//   };
// };

// // multiply.delay(500)(5, 5);

// //c
// function multiply(a, b, c, d) {
//   console.log(a * b * c * d);
// }

// multiply.delay(1000)(2, 3, 4, 5);

//Question 7:
// class DigitalClock {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }
//   display() {
//     let date = new Date();
//     //create 3 variables in one go using array destructuring
//     let [hours, mins, secs] = [
//       date.getHours(),
//       date.getMinutes(),
//       date.getSeconds(),
//     ];

//     if (hours < 10) hours = "0" + hours;
//     if (mins < 10) mins = "0" + mins;
//     if (secs < 10) secs = "0" + secs;
//     console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//   }
//   stop() {
//     clearInterval(this.timer);
//   }
//   start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), 1000);
//   }
// }
// const myClock = new DigitalClock("my clock:");
// myClock.start();

// //a
// class PrecisionClock extends DigitalClock {
//   constructor(prefix, precision = 1000) {
//     super(prefix)
//     this.precision = precision
//   }

// start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), this.precision);
//   }
// }

// //b
// class AlarmClock extends DigitalClock {
//   constructor(prefix, wakeupTime = '07:00') {
//     super(prefix);
//     this.wakeupTime = wakeupTime;
//   }

//   display() {
//     let date = new Date();
//     let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

//     if (hours < 10) hours = '0' + hours;
//     if (mins < 10) mins = '0' + mins;
//     if (secs < 10) secs = '0' + secs;

//     const currentTime = `${hours}:${mins}`;
//     console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

//     if (currentTime === this.wakeupTime) {
//       console.log(' Wake Up!');
//       this.stop();
//     }
//   }
// }

//Question 8:
// a
// function validateStringArg(fn) {

//   return function (...args) {
//     // c
//     for (let arg of args) {
//       if (typeof arg !== "string") {
//         throw new Error(`Invalid argument: "${arg}" is not a string.`);
//       }
//     }

//     return fn(...args);
//   };
// }

// // b
// function orderItems(...itemNames) {
//   return `Order placed for: ${itemNames.join(", ")}`;
// }

// const validatedOrderItem = validateStringArg(orderItems);

// // d
// try {
//   console.log(validatedOrderItem("Apple Watch", "iPhone", "AirPods"));
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   console.log(validatedOrderItem("MacBook", 123, "iPad"));
// } catch (error) {
//   console.error(error.message);
// }

//Question 9:
// function randomDelay() {
//   return new Promise((resolve, reject) => {
//     // a
//     const delay = Math.floor(Math.random() * 20) + 1; // in seconds

//     setTimeout(() => {
//       // b
//       if (delay % 2 === 0) {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay * 1000);
//   });
// }

// // c & d
// randomDelay()
//   .then((delay) => {
//     console.log(`Success! Delay of ${delay} seconds.`);
//   })
//   .catch((delay) => {
//     console.log(`Failed! Delay of ${delay} seconds.`);
//   });

//Question 10:
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
// import fetch from "node-fetch";
// globalThis.fetch = fetch;
// function fetchURLData(url) {
//   let fetchPromise = fetch(url).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   });
//   return fetchPromise;
// }

// fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));


//   //a
//   async function fetchURLDataAsync(url) {
//   try {
//     const response = await fetch(url);
//     if (response.status === 200) {
//       const data = await response.json();
//       return data;
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   } catch (error) {
//     throw new Error(`Fetch error: ${error.message}`);
//   }
// }

// //b
// fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(" .then version success:", data))
//   .catch((error) => console.error(" .then version error:", error.message));


// fetchURLData("https://jsonplaceholder.typicode.com/invalid-url")
//   .then((data) => console.log(" .then version success:", data))
//   .catch((error) => console.error(" .then version error:", error.message));


// //c
// async function fetchMultipleURLs(urls) {
//   try {
//     const results = await Promise.all(
//       urls.map(async (url) => {
//         const response = await fetch(url);
//         if (response.status === 200) {
//           return response.json();
//         } else {
//           throw new Error(`Request failed with status ${response.status} for URL: ${url}`);
//         }
//       })
//     );
//     return results;
//   } catch (error) {
//     throw new Error(`Error fetching multiple URLs: ${error.message}`);
//   }
// }
// (async () => {
//   const urls = [
//     "https://jsonplaceholder.typicode.com/todos/1",
//     "https://jsonplaceholder.typicode.com/todos/2",
//     "https://jsonplaceholder.typicode.com/bad-endpoint" 
//   ];

//   try {
//     const allData = await fetchMultipleURLs(urls);
//     console.log(" Multiple fetch success:", allData);
//   } catch (error) {
//     console.error(" Multiple fetch error:", error.message);
//   }
// })();
