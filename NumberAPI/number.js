class NumberAPI {
  constructor(num) {
    this.num = num;
  }

  async getNumber() {
    const response = await fetch(`http://numbersapi.com/${this.num}`);
    const responData = await response.text();

    return responData;
  }

  changeTheNumber(num) {
    this.num = num;
  }
}
