// esercizio 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static elder(person1, person2) {
    if (person1.age > person2.age) {
      console.log(person1.name + " è più grande di " + person2.name);
    } else {
      console.log(person2.name + " è più grande di " + person1.name);
    }
  }
}

let p1 = new Person("Giorgio", 28);
let p2 = new Person("Simone", 25);
let p3 = new Person("Giulia", 22);

Person.elder(p2, p1);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>esercizio 2<<<<<<<<<<<<<<<<<<<<<<<<<<<<

myButton = document.getElementById("myButton");
myUl = document.querySelector("ul");

const newArray = [
  "Mario",
  "Gianni",
  "Monica",
  "Simone",
  "Giulia",
  "Francesca",
  "Stefano",
  "Teresa",
  "Valerio",
  "Valentina",
  "Simone",
  "Roberta",
];

let pageSize = 10;

class Pagination {
  constructor(items, pageSize) {
    this.items = items;
    this.pageSize = pageSize;
  }
}

myButton.onclick = function () {
  let newPagination = new Pagination(newArray, pageSize);
  for (let i = 0; i < newPagination.pageSize; i++) {
    const element = newPagination.items[i];
    let li = document.createElement("li");
    li.innerText = element;
    myUl.appendChild(li);
  }
};
