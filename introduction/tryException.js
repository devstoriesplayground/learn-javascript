/* The try, catch and finally, blocks are used to handle exceptions (a type of error). Syntax Error is an error in syntax. Runtime Error is the type of error that occurs during the execution of the program. */

try {
  // code
  console.log('Try block');
} catch (error) {
  // if in the try block error happened
  console.error('Catch called if an error');
} finally {
  // anyway
  console.log('Finally is called anyway');
}