const getMonthDiff = (d1, d2) => {
    const today = new Date();
    let date1, date2;

    if (!d1 && d2) {
        date2 = new Date(d2);
        date1 = new Date(date2.getFullYear(), date2.getMonth() - 1, date2.getDate());
    } else if (d1 && !d2) {
        date1 = new Date(d1);
        date2 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    } else if (!d1 && !d2) {
        date2 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        date1 = new Date(date2.getFullYear(), date2.getMonth() - 1, date2.getDate());
    } else {
        date1 = new Date(d1);
        date2 = new Date(d2);
    }

    const diffDate = date1.getTime() - date2.getTime();

  return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
}

console.log(getMonthDiff("","2024-03-15"));

const start_date = '2024-02-19';
const end_date = '2024-03-19';
const install_date = "2024-01-02";

// 위 3날짜 중 start와 install를 비교하여 install 보다 더 오래전 날짜일 경우는 install 날짜를 지정
// const startDate = new Date(start_date);
// const endDate = new Date(end_date);
// const installDate = new Date(install_date);

// console.log(startDate < installDate)
// console.log(startDate.getTime())
// console.log(installDate.getTime())

const rate = '0.01'

console.log(Number(rate))

if(parseInt(rate)) console.log('true다')
else console.log('false다')