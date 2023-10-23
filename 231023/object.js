const bookObj = {
  title: "Harry Potter",
  author: "JK Rowling",
  numPages: 653,
};

const bookArr = [
  {
    title: "Harry P",
    author: "JK Rowling",
    numPages: 653,
  },
  {
    title: "Harry Dr",
    author: "JK Rowling",
    numPages: 653,
  },
  {
    title: "Harry F",
    author: "JK Rowling",
    numPages: 653,
  },
];

function findBook(title, bookArray) {
  for (let t = 0; t < bookArray.length; t++) {
    if (bookArray[t].title === title) {
      return bookArray[t];
    }
    return null;
  }
}

const bookInfo = findBook("Harry P", bookArr);

// console.log(bookInfo);

let str = "hello";
const strObj = {};

const letterFrequency = (str) => {
  return str.split("").reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
};
console.log(letterFrequency(str));
