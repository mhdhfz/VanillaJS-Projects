class UI {
  constructor() {
    this.data = document.getElementById("number-details");
  }

  showTheNumber(numData) {
    this.data.textContent = numData;
  }
}
