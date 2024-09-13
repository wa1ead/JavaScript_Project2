// Reverse a String: Write a function that reverses a given string.
function reverseStr(str){
  var strArr = str.split("");
  var arrReverse = strArr.reverse();
  var strJoin = strArr.join("");
  return strJoin
}