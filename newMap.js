const QueueMsg = new Map();

function setQueueMsg(name, msg) {
  QueueMsg.set(name, msg);
}

function getQueueMsg(name) {
  return QueueMsg.get(name);
}

function delQueueMsg(name) {
  QueueMsg.delete(name);
}

function clearQueueMsg() {
  QueueMsg.clear();
}

const fullName = (text, evseId) => {return text + '_key_' + evseId}

function sendQMessage(name, msg) {
  let setName = fullName(name, msg.public)
  setQueueMsg(setName, msg);

  return {
    getQueueMsg : getQueueMsg(setName),
  }
}

const testName = 'ABC_2'
let evseId = 15


// let key = fullName(testName, evseId)
let key = testName

let msg = {
  public : 1,
  first : 'first',
  second :'second',
  third : 'third',
}

let msg_2 = {
  public : 2,
  forth : 'forth',
  fifth : 'fifth',
  sixth :'sixth',
}


let test = sendQMessage(key, msg)

console.group('Queue_1')
// console.log(key)
// console.log(QueueMsg)
console.log(test.getQueueMsg)
// console.log(getQueueMsg(key))
console.groupEnd('Queue_1')

// key = fullName(testName, evseId - 1)
// sendQMessage(key, {...msg, ...msg_2})

// console.group('Queue_2')
// // console.log(key)
// console.log(QueueMsg)
// console.log(message)
// // console.log(getQueueMsg(key))
// console.groupEnd('Queue_2')

// console.group('Queue_3')
// // console.log(Object.keys(getQueueMsg()).findIndex(e => e === 'sixth'))
// console.groupEnd('Queue_3')