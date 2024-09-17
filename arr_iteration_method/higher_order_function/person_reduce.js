const persons = [
  { name: "sanu", age: 24 },
  { name: "radha", age: 25 },
  { name: "radha", age: 25 },
  { name: "radha", age: 25 },
  { name: "radha", age: 25 },
  { name: "sana", age: 26 },
  { name: "manu", age: 26 },
];

// acc = {}
const ageCount = persons.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ageCount);
