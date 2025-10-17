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
