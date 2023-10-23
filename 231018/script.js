const factorial = (a) => {
  if (a < 2) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
};
console.log(factorial(5));

function primtal(a) {
  if (a < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}
const numToCheck = 23;
const isNumPrime = primtal(numToCheck);

console.log(` ${isNumPrime}`);

const sentence =
  "The majestic mountain stood tall against the backdrop of the clear blue sky.";
const lengthOfShortest = (sentence) => {
  const words = sentence.split(" ");
  let shortWordLength = Infinity;
  let shortWord;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordLength = word.length;

    if (wordLength < shortWordLength) {
      shortWordLength = wordLength;
      shortWord = words[i];
    }
  }
  return [shortWord, shortWordLength];
};
console.log(lengthOfShortest(sentence));

function getMonthByName() {
  let userInput;
  let foundMonth = false;
  const months = [
    { month: "Januari", length: 31 },
    { month: "Februari", length: 28 },
    { month: "Mars", length: 31 },
    { month: "April", length: 30 },
    { month: "Maj", length: 31 },
    { month: "Juni", length: 30 },
    { month: "Juli", length: 31 },
    { month: "Augusti", length: 31 },
    { month: "September", length: 30 },
    { month: "Oktober", length: 31 },
    { month: "November", length: 30 },
    { month: "December", length: 31 },
  ];

  while (!foundMonth) {
    userInput = prompt(
      "Första 3 bokstäverna på månaden du vill se?"
    ).toLowerCase();

    const selectedMonth = months.find(({ month }) =>
      month.toLowerCase().startsWith(userInput)
    );

    if (selectedMonth) {
      foundMonth = true;
      return [selectedMonth.month, selectedMonth.length];
    } else {
      return "Not found";
    }
  }
}
// const [name, length] = getMonthByName();
// console.log(`Du valde ${name} som är ${length} dagar lång.`);

function getMiddleFromWord(word) {
  const stringLength = word.length;
  let letterToReturn = "";
  let index;

  if (stringLength % 2 === 0) {
    index = stringLength / 2 - 1;
    letterToReturn = word.substring(index, index + 2);
  } else {
    index = Math.floor(stringLength / 2);
    letterToReturn = word.charAt(index);
  }
  return letterToReturn;
}

console.log(getMiddleFromWord("muurtin"));
