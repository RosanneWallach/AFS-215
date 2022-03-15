const expect = require("chai").expect;

class ArrClass {
  constructor() {
    this.myArr = [];
  }

  addItem(item) {
    this.myArr.push(item);
    return this.myArr;
  }

  printArr() {
    return this.myArr;
  }

  rmvByVal(value) {
    for (let i = 0; i < this.myArr.length; i++) {
      if (this.myArr[i] == value) {
        this.myArr.splice(i, 1);
      }
    }
    return this.myArr;
  }

  searchVorVal(value) {
    let n = this.myArr.includes(value);
    if (n === false) {
      return "ERROR!!";
    } else {
      return n;
    }
  }
}

before(function () {
  console.log("Testing Intiated");
});

after(function () {
  console.log("Testing Completed");
});

afterEach(function () {
  console.log("All Testing Completed");
});

beforeEach(function () {
  arr1 = new ArrClass();
});

it("expected to add 'Hello!' to the array", function () {
  expect(arr1.addItem("Hello!")).to.deep.equal(["Hello!"]);
});

it("expected to call the array", function () {
  expect(arr1.printArr()).to.deep.equal([]);
});

it("expected to remove specified item from array", function () {
  expect(arr1.rmvByVal("Hello!")).to.deep.equal([]);
});

it("If exists, return true. If not, provide an error message.", function () {
  expect(arr1.searchVorVal("Hello!")).to.equal("ERROR!!!");
});