const persons = [
  { name: "Rishabh Tripathi", age: 21, city: "Kanpur", country: "India" },
  { name: "Sophia Brown", age: 29, city: "New York", country: "USA" },
  { name: "Liam Smith", age: 32, city: "London", country: "UK" },
  { name: "Amelia Garcia", age: 27, city: "Madrid", country: "Spain" },
  { name: "Aiden Lee", age: 23, city: "Seoul", country: "South Korea" },
  { name: "Olivia", age: 35, city: "Buenos", country: "Argentina" },
  { name: "Noah Anderson", age: 28, city: "Sydney", country: "Australia" },
  { name: "Emma Johansson", age: 30, city: "Stockholm", country: "Sweden" },
  { name: "Lucas Müller", age: 26, city: "Berlin", country: "Germany" },
  { name: "Isabella Rossi", age: 31, city: "Rome", country: "Italy" },
];

const a = persons
  .filter((obj) => obj.age > 20 && obj.age <= 30)
  .map((ele) => ele.name);
const str = "A";
a.forEach((ele) => {
  if (ele.includes(str)) {
    console.log(ele);
  }
});
console.log(a);
