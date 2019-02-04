/*****************NATIVE FILTER*************************/

var arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myFilter = function(func) {
  var evenArr = [];
  for (var i = 0; i < this.length; i++) {
    if (func(this[i])) {
      evenArr.push(this[i]);
    }
  }
  return evenArr;
};

var evenNumbers = arr.myFilter(function(num) {
  return num % 2 == 0 ? true : false;
});

console.log(evenNumbers);