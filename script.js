// Reverse a String: Write a function that reverses a given string.
function reverseStr(str) {
  var strArr = str.split("");
  var arrReverse = strArr.reverse();
  var strJoin = strArr.join("");
  return strJoin;
}

// Count Characters: Create a function that counts the number of characters in a string.
function countChar(str) {
  return str.length;
}

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capWord(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function minMax(arr) {
  var min = Infinity;
  var max = -Infinity;
  for (let item of arr) {
    if (item > max) {
      max = item;
    }
    if (item < min) {
      min = item;
    }
  }
  return { min, max };
}

// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArr(arr) {
  var sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
}

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArr(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
