// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }

let fruits = ["apple", "orange", "pear", "kiwi", "pineapple"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i} - ${fruits[i]}`);
// }

// for (let i = 0; i <= 10; i++) {
//   multiple(7, i);
// }

// function multiple(number, i) {
//   console.log(number * i);
// }

const frukter = ["äpple", "banan", "apelsin", "jordgubbe", "kiwi"];
let myString = ``;

// for (let i = 0; i < frukter.length; i++) {
//   myString += `${frukter[i]}, `;
// }

// const newDiv = document.createElement("div");
// newDiv.innerText = myString;

// document.body.appendChild(newDiv);

// function findFruits(frukter, fruktToFind) {
//   frukter.forEach((frukt) => {
//     myString += frukt === fruktToFind ? frukt : "";
//   });
// }

// findFruits(frukter, "banan");
// console.log(myString);

// const numbers = [
//   42, 19, 73, 56, 91, 3, 67, 8, 29, 55, 12, 88, 17, 62, 40, 25, 70, 53, 37, 4,
//   99, 11, 64, 81, 6, 50, 31, 75, 23, 60, 9, 46, 85, 14, 69, 22, 78, 2, 44, 87,
//   15, 71, 35, 58, 28, 66, 38, 74, 5, 89, 10, 63, 32, 77, 24, 61, 1, 47, 86, 13,
//   68, 21, 72, 39, 57, 18, 41, 16, 80, 30, 59, 49, 76, 33, 48, 7, 65, 20, 45, 84,
//   36, 92, 27, 54, 34, 51, 70, 98, 43, 26, 31, 79, 54, 62, 33, 45, 17, 98, 71,
//   22,
// ];
// let highNumber = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > highNumber) {
//     highNumber = numbers[i];
//   }
// }

// let things = ["hammer", "nails", "ruler", "screwdriver", "screws", "saw"];

// for (const thing of things) {
//   console.log(thing);
// }

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// for (const key in person) {
//   console.log(key);
//   console.log(key + person[key]);
// }

// let things = ["hammer", "nails", "ruler", "screwdriver", "screws", "saw"];

// things.forEach((thing, index) => {
//   console.log(`${index}: ${thing}`);
// });
// let i = 0;
// while (i < 1000) {
//   console.log(i);
//   i++;
// }

// let colors = ["spader", "hjärter", "ruter", "klöver"];

// for (let i = 0; i < colors.length; i++) {
//   for (let c = 1; c < 15; c++) {
//     console.log(`${colors[i]}: ${c === 1 ? `A` : `${c}`}`);
//   }
// }

// let signToLog = `*`;

// for (let i = 1; i <= 5; i++) {
//   let row = ``;
//   for (let l = 1; l <= i; l++) {
//     row += `${signToLog} `;
//   }
//   console.log(row);
// }

// let friends = [
//   {
//     name: "Sixten",
//     likes: ["bananas", "strawberries", "blueberries"],
//   },
//   {
//     name: "Khalid",
//     likes: ["papaya", "pear", "pineapple"],
//   },
//   {
//     name: "Lisa",
//     likes: ["raspberries", "watermelon", "apple"],
//   },
// ];

// for (const friend of friends) {
//   for (const like of friend.likes) {
//     console.log(like);
//   }
// }

fetch(
  "https://github.com/antonisoaho/jsd23/blob/master/231025/passwords.txt"
).then(function (response) {
  if (response.status === 200) {
    return response.text();
  } else {
    throw new Error("Något gick fel");
  }
});
//passwords

// const topsecret = passwords[Math.floor(Math.random() * passwords.length)];

// console.log(`Password chosen: ${topsecret}`);

// for (let i = 0; i < passwords.length; i++) {
//   if (passwords[i] === topsecret) {
//     console.log(`Found your password: "${passwords[i]}" on index: ${i}`);
//     break;
//   }
// }
