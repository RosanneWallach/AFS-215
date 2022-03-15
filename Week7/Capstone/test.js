// You have learned how to perform TDD using Python & JavaScript. The choice is yours as to which language you would like to use for this project. You only have to use one language. 

// Create a Todo list that can accomplish the following:

// Call the list
// Add an item to the list
// Add multiple items to the list
// Remove the first item from the list
// Remove the last item from the list
// Remove a specific item from the list
// If attempting the Python version of this project use pytest.fixture.
// If attempting the JavaScript version of this project use beforeEach.
// You will want to use at least one of each of the following data types to your list: String, Number, Object / Dictionary, and Boolean


const expect = require("chai").expect;

class Assignment {
  constructor() {
    this.myList = [];
  }

  addItem(item) {
    this.myList.push(item);
    return this.myList;
  }

  printList() {
    console.log(this.myList);
  }

  addMultiple(items) {
    for (let i = 0; i < items.length; i++) {
      this.myList.push(items[i]);
    }
    return this.myList;
  }

  rmvFirstItem() {
    this.myList.shift();
    return this.myList;
  }

  rmvLastItem() {
    this.myList.pop();
    return this.myList;
  }

  rmvByVal(value) {
    for (let i = 0; i < this.myList.length; i++) {
      if (this.myList[i] == value) {
        this.myList.splice(i, 1);
      }
    }
    return this.myList;
  }
}

beforeEach(function () {
  t1 = new Assignment();
});

before(function () {
  console.log("Initiate Tests!");
});

beforeEach(function () {
  console.log("Begin Testing!");
});

after(function () {
  console.log("Testing Complete!");
});

it("Call the List!!", function () {
  return t1;
});

it("Add an item to the list!", function () {
  expect(t1.addItem("Hello!")).to.deep.equal(["Hello!"]);
});

it("Add multiple items to the list!", function () {
  expect(t1.addMultiple([4, 5, "anotherVal"])).to.deep.equal([4,5,"anotherVal",]);
});

it("Remove the first item!", function () {
  t1.addMultiple([{ a: "val1", b: "val2" }, 4, 6, 8]);
  expect(t1.rmvFirstItem()).to.deep.equal([4, 6, 8]);
});

it("Remove the last item!", function () {
  t1.addMultiple([2, 4, 6, "anotherVal"]);
  expect(t1.rmvLastItem()).to.deep.equal([2, 4, 6]);
});

it("Remove specific item!", function () {
  t1.addMultiple([2, 4, true, 8]);
  expect(t1.rmvByVal(true)).to.deep.equal([2, 4, 8]);
});