let values = [];

for (let i = 0; i < 7; i++) {
  values.push(
    document.querySelectorAll(".as-imagegrid-item a span")[i].innerText
  );
  document.querySelectorAll(".as-imagegrid-wrapper .as-imagegrid-item a span")[
    i
  ].innerText = "";
}

// for (let i = 0; i < 6; i++) {
console.log(values);
// }
