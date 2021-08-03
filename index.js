// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  return myString === ""
    ? ""
    : reverseString(myString.substring(1)) + myString.charAt(0);
}

function isPalindrome(myString) {
  if (myString.length < 2) {
    return true;
  }
  if (myString[0] === myString[myString.length - 1]) {
    return isPalindrome(myString.slice(1, myString.length - 1));
  }
  return false;
}

function addUpTo(myArray, index) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let newArray = myArray.slice(0, index + 1);
  return newArray.reduce(reducer);
}
