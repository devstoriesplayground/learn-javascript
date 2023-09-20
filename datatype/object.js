// Object is non primitive data type that allows you to store data 

// Objects 
console.log(typeof {}); // object

const person = {
  name: 'Playground',
  age: 24
};

console.log(person); // { name: 'Bob', age: 24 }

console.log(person.age); // 24
// different ways have the same result 
console.log(person['age']); // 24

// you can use methods from Object
person.showName = function () {
  console.log(this.name);
};

person.showName(); // Bob