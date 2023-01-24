// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>esercizio 1<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static elder(person1, person2) {
    if (person1.age > person2.age) {
      console.log(
        person1.name +
          " ha " +
          person1.age +
          " anni, quindi è più grande di " +
          person2.name +
          " che ne ha " +
          person2.age
      );
    } else {
      console.log(
        person2.name +
          " ha " +
          person2.age +
          " anni, quindi è più grande di " +
          person1.name +
          " che ne ha " +
          person1.age
      );
    }
  }
}

let p1 = new Person("Giorgio", 28);
let p2 = new Person("Simone", 25);
let p3 = new Person("Giulia", 22);

Person.elder(p2, p1);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>esercizio 2<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

myButton1 = document.getElementById("myButton1");
myButton2 = document.getElementById("myButton2");
myButton3 = document.getElementById("myButton3");
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
  "Monica",
  "Simone",
  "Giulia",
  "Francesca",
  "Stefano",
  "genovefo",
  "guglielma",
  "ermegilda",
  "mariateresa",
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

myButton1.onclick = function () {
  myUl.innerText = "";
  let newPagination = new Pagination(newArray, pageSize);

  for (let i = 0; i < newPagination.pageSize; i++) {
    const element = newPagination.items[i];
    if (element) {
      let li = document.createElement("li");
      li.innerText = element;
      myUl.appendChild(li);
    }
  }
};

myButton2.onclick = function () {
  myUl.innerText = "";
  let newPagination = new Pagination(newArray, pageSize);

  for (let i = 0; i < newPagination.pageSize; i++) {
    const element = newPagination.items[i + 10];
    if (element) {
      let li = document.createElement("li");
      li.innerText = element;
      myUl.appendChild(li);
    }
  }
};

myButton3.onclick = function () {
  myUl.innerText = "";
  let newPagination = new Pagination(newArray, pageSize);

  for (let i = 0; i < newPagination.pageSize; i++) {
    const element = newPagination.items[i + 20];
    if (element) {
      let li = document.createElement("li");
      li.innerText = element;
      myUl.appendChild(li);
    }
  }
};
