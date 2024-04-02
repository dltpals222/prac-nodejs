const data = [
  {
    timestamp: "2024-03-28T01:52:43.284Z",
    sampledValue: [
      {
        value: 47,
        unit: "Celsius",
        phase: "L1-N",
        context: "Sample.Clock",
        format: "Raw",
        measurand: "Temperature",
        location: "Body",
      },
    ],
  },
]

let obj = {...data[0].sampledValue[0], timestamp : data[0].timestamp};
// obj.timestamp = data[0].timestamp;

console.log(data[0].timestamp.replace('T'," ").split('.')[0]);
// console.log(data, data[0].sampledValue[0])