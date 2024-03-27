function sampleClockMeterValuesWithInterval(param){
  let innerInterval;
  innerInterval = setInterval(() => {
    console.log(param)
  }, 1000)

  return function clearSampleClockTemperatureInterval(){
      console.log("인터벌이 종료되었습니다.")
      clearInterval(innerInterval);
  }
}

let test = sampleClockMeterValuesWithInterval(5)
setTimeout(() => {
  test()
}, 5000);