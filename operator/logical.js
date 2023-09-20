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
