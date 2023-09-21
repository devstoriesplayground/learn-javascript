// The for..in loop in JavaScript allows you to iterate over all property keys of an object.

const student = {
    name: 'Devs',
    class: 7,
    age: 12
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}