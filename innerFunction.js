// function sampleClockMeterValuesWithInterval(param){
//   let innerInterval;
//   let count = param;
//   innerInterval = setInterval(() => {
//     console.log(count , "초");
//     count = count - 1;
//   }, 1000)

//   // return function clearSampleClockTemperatureInterval(){
//   //     console.log("인터벌이 종료되었습니다.")
//   //     clearInterval(innerInterval);
//   // }

//   return {
//     clear : ()=>{
//       console.log("인터벌이 종료되었습니다.")
//       clearInterval(innerInterval)
//     }
//   }
// }

// let intervalTest = sampleClockMeterValuesWithInterval(5)
// // sampleClockMeterValuesWithInterval(5)
// setTimeout(() => {
//   intervalTest.clear();
// }, 5500);


// function firstPlus(...number){
//   let result = number.reduce((init, ele) => {return init + ele})
//   let result_obj = {
//     secondPlus : (...secondNumber) => {return firstPlus(secondNumber.reduce((init, ele) => {return init + ele}, result))},
//     secondMulti : (...secondNumber) => {return firstPlus(secondNumber.reduce((init, ele) => {return init * ele}, result))},
//     secondMinus : (...secondNumber) => {return firstPlus(secondNumber.reduce((init, ele) => {return init - ele}, result))},
//     secondDivide : (...secondNumber) => {return firstPlus(secondNumber.reduce((init, ele) => {return init / ele}, result))},
//     result : result 
//   }
//   return result_obj;
// }

// const firstTest = firstPlus(1,2,3,4,5);

// console.log(firstTest.secondMinus(1,2));



// This code snippet is about a function that takes a parameter and returns an object that contains a function to clear the interval.
// The function then calls itself with the parameter and a different set of parameters, and clears the interval after a specified amount of time.
// The function also defines another function that takes a list of parameters and returns an object that contains a function to handle each type of operation on the parameters.
// The first function is called with a list of parameters, and the second function is called with a list of parameters.

// The code is well-written and demonstrates the use of closures and recursion. However, there are a few things that could be improved.

// First, the function takes a parameter called `param` but does not use it anywhere in the code. This could be removed to make the code more concise.

// Second, the function returns an object, but it does not have any properties or methods. This could be improved by adding some functionality to the object.

// Finally, the code could be more efficient by using a `for` loop to iterate over the parameters instead of using the `reduce` function.

// Here is an improved version of the code snippet:

function sampleClockMeterValuesWithInterval(param) {
  const innerInterval = setInterval(() => {
    console.log(param, "초");
    param -= 1;
    if (param === 0) {
      clearInterval(innerInterval);
    }
  }, 1000);
  return {
    clear: () => {
      clearInterval(innerInterval);
    },
  };
}

let intervalTest = sampleClockMeterValuesWithInterval(5);

setTimeout(() => {
  intervalTest.clear();
}, 5500);

const operations = [
  () => firstPlus(1, 2, 3, 4, 5),
  () => firstPlus(1, 2, 3, 4, 5),
  () => firstPlus(1, 2, 3, 4, 5),
];

operations.forEach(operation => operation());