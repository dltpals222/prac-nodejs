function sampleClockMeterValuesWithInterval(param){
  let innerInterval;
  let count = param;
  innerInterval = setInterval(() => {
    console.log(count , "초");
    count = count - 1;
  }, 1000)

  // return function clearSampleClockTemperatureInterval(){
  //     console.log("인터벌이 종료되었습니다.")
  //     clearInterval(innerInterval);
  // }

  return {
    clear : ()=>{
      console.log("인터벌이 종료되었습니다.")
      clearInterval(innerInterval)
    }
  }
}

let intervalTest = sampleClockMeterValuesWithInterval(5)
// sampleClockMeterValuesWithInterval(5)
setTimeout(() => {
  intervalTest.clear();
}, 5500);


function firstPlus(...number){
  let result = number.reduce((init, ele) => {return init + ele})
  let result_obj = {
    secondPlus : (...secondNumber) => {return firstPlus(secondNumber.reduce((init, ele) => {return init + ele}, result))},
    secondMulti : (...secondNumber) => {return firstPlus(secondNumber.reduce((init, ele) => {return init * ele}, result))},
    secondMinus : (...secondNumber) => {return firstPlus(secondNumber.reduce((init, ele) => {return init - ele}, result))},
    secondDivide : (...secondNumber) => {return firstPlus(secondNumber.reduce((init, ele) => {return init / ele}, result))},
    result : result 
  }
  return result_obj;
}

const firstTest = firstPlus(1,2,3,4,5);

console.log(firstTest.secondMinus(1,2));