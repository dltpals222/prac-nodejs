const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
}

// for(key in obj){
//   console.log(obj);
  // if(obj[key] === 1) delete obj[key];
  // delete obj[key];
// }

delete obj;

// console.log(obj);

let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

delete array[1];

// console.log(array);
// console.log(1 in array);

let obj2 = {
  location_id: 337,
  name: "1동 지하 1층",
  loc_name: "김검증_대충 좋은 아파트_1동 지하 1층",
  rapidity_install_count: 2,
  slow_install_count: 5,
  wireless_install_count: 0,
  total_install_count: 7,
  rapidity_use_rate: 0,
  rapidity_use_hap: 0,
  rapidity_use_bunmo: 0,
  total_use_rate: 0,
  evse : null,
};

// console.log(('rapidity_use_rate' in obj2))
// console.log(('slow_use_rate' in obj2))
Object