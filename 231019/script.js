const display = document.getElementById("display");
display.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    calculateResult();
  }
});

function pushDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error:" + error.message;
  }
}
