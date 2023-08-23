/* 
Comparison operators is used to compared two or more values and give back a boolean value which is either true or false

Operators:

== is equal
!= is not equal
=== is strict equal
!== is not strict equal
> is greater than
>= is greater than or equal
< is less than
<= is less than or equal 

*/

const a = 1
const b = 2
const c = 1

console.log(a == b)
console.log(a != c)
console.log(a === c)

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result)


/*
Logical Operators:

&& evaluates to true if both the operands are true
|| evaluates to true if **one of ** the operands are true
! evaluates to true if the operand is false and vice-versa

*/

let x = 8
let y = 9

if (y > x && x < y) {
  console.log("true")
}else if(x == 1 || y<=5){
  console.log("true")
}
