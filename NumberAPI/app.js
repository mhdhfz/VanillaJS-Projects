// init numberapi
const num = new NumberAPI(2);
const ui = new UI();

const searchNumber = document.getElementById("getNumber");

//document.addEventListener("DOMContentLoaded", getNumberResult);

searchNumber.addEventListener("click", e => {
  const inputNum = document.getElementById("numberData").value;

  if (inputNum === "") {
    alert("insert a number");
  } else {
    num.changeTheNumber(inputNum);

    getNumberResult();
  }

  e.preventDefault();
});

function getNumberResult() {
  num
    .getNumber()
    .then(results => ui.showTheNumber(results))
    .catch(err => console.log(err));
}
