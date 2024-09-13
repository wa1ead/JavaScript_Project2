// Reverse a String: Write a function that reverses a given string.
function reverseStr(str){
  var strArr = str.split("");
  var arrReverse = strArr.reverse();
  var strJoin = strArr.join("");
  return strJoin
}

// Count Characters: Create a function that counts the number of characters in a string.
function countChar(str){
  return str.length;
}