let print = document.querySelector("#button-addon2");
let space = document.querySelector(".space");
let tableOf = document.getElementById("table_of");
// let tableOf = 3;
let table = [];

const findValues = (tableOf) => {
  for (let i = 1; i <= 20; i++) {
    table[i - 1] = tableOf * [i];
  }
};

print.addEventListener("click", () => {
  row1.innerHTML = "";
  row2.innerHTML = "";
  findValues(tableOf.value);
  for (let index = 1; index <= 20; index++) {
    if (index < 10) {
      row1.innerHTML += `${tableOf.value} x 0${index} = ${
        table[index - 1]
      }<br>`;
    } else if (index == 11) {
      row1.innerHTML += `${tableOf.value} x ${index} = ${table[index - 1]}<br>`;
    } else {
      row2.innerHTML += `${tableOf.value} x ${index} = ${table[index - 1]}<br>`;
    }
  }
  console.log(tableOf.value);
  console.log(table);
});
