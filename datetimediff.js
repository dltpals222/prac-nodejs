console.group('today');
let currentDate = new Date(); // 현재 날짜와 시간을 나타내는 Date 객체 생성
console.log("현재 날짜와 시간: " + currentDate);

let hourAgo = new Date(currentDate.getTime() - 3630000); // 1시간 전 날짜와 시간 계산
console.log("1시간 전 날짜와 시간: " + hourAgo);

// let formattedDate = currentDate.replace("T"," ").split('.')[0];
// let formattedDate = currentDate.toISOString().replace("T"," ").split('.')[0];
let formattedDate = currentDate.getTime() + 32400000;
console.info(new Date(formattedDate).toISOString())
// console.info(new Date(formattedDate).setHours(new Date(formattedDate).getHours() + 9))
console.groupEnd('today');

function formatDate(date, Hour = 0) {
  const initDate = new Date(date);
  initDate.setHours(initDate.getHours() + Hour);
  
  const year = initDate.getFullYear();
  const month = String(initDate.getMonth() + 1).padStart(2, '0');
  const day = String(initDate.getDate()).padStart(2, '0');
  const hour = String(initDate.getHours()).padStart(2, '0');
  const minute = String(initDate.getMinutes()).padStart(2, '0');
  const second = String(initDate.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

console.group('today-format');
let datetime = "2024-03-28T07:15:33.203Z"
console.log(formatDate(datetime, 1))
console.log(formatDate(datetime))
console.log(formatDate(datetime, -1))
console.groupEnd('today-format');