let test = '2024-03-20';

test = test.split('-')

test[1] = ('0' + (Number(test[1]) + 1)).slice(-2)

console.log(test)