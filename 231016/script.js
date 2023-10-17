function rollDice() {
  return Math.ceil(Math.random() * 6);
}

const diceRoll = rollDice();
console.log(`${diceRoll}`);
