// The Basics

const fruitBlast = ["banan", "melon", "kiwi", "citron", "drakfrukt"];
const randoms = ["ok", 2, true];

let animals = ["cat", "hamster", "parrot", "funky chihuahua"];

animals[1] = "tiger";

// console.log(animals);

let a = [1, 2, 3, 7, 8, 9];
let b = [4, 5, 6];

a.splice(3, 0, ...b);

let arre = ["a", "b", "c"];
let c = [...arre];

// console.log(c);

//Methods

let fruit = ["kiwi", "apple", "pear"];
// fruit.push("en frukt");

// fruit.unshift("en frukt");
// fruit.shift();
// fruit.splice(2, 0, "frukt", "okej", "nej");

let names = ["David", "Christoffer", "Johan", "Maja", "Andreas"];

names.splice(1, 2);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.reverse();

let str = "Supercalifragilisticexpialidocious";

const doesInclude = str.indexOf("p");
const sub = str.substring(0, 5);
const lastSub = str.substring(str.length - 7, str.length);

// console.log(lastSub);

// Advanced methods ( high order methods )

// .filter()
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];

const filterArray = numArray.filter((num) => num < 5);

let persons = [
  {
    name: "Felicia",
    age: 12,
  },
  {
    name: "Pelle",
    age: 20,
  },
  {
    name: "Peter",
    age: 59,
  },
  {
    name: "Anna",
    age: 32,
  },
  {
    name: "Jocke",
    age: 18,
  },
  {
    name: "Ella",
    age: 3,
  },
];

const legalAge = persons.filter((person) => person.age > 18);
const illegalAge = persons.filter((person) => person.age < 18);

console.log(legalAge);

// .sort()

let arr = ["beta", "alfa", "gamma"];

const sortedArray = arr.sort();

let num = [1, 5, 7, 9, 3, 4, 2, 6, 8];

const nuArray = num.sort();

const personsByAge = persons.sort((a, b) => a.age - b.age);
const personsByElder = persons.sort((a, b) => b.age - a.age);

const personByName = persons.sort((a, b) => a.name.localeCompare(b.name));

// .map()

const capitalLetters = persons.map((persons) => persons.name.toUpperCase());
const reverseName = persons.map((persons) => {
  const newName = persons.name.toLowerCase().split("").reverse().join("");
  return { name: newName, age: persons.age };
});

console.log(capitalLetters);

// Loop arrays

let fruits = ["apelsin", "päron", "äpple", "kiwi"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

for (const fruit of fruits) {
  console.log(fruit);
}

console.log("-------");

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("-------");

for (let i = 0; i < fruits.length; i++) {
  console.log(i + " - " + fruits[i]);
}
