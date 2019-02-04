/*****************NATIVE MAP*************************/

var arr = [1, 2, 3, 4];

Array.prototype.mymap = function(func) {
  var tempArr = [];
  for (var i = 0; i < this.length; i++) {
    tempArr.push(func(this[i]));
  }
  return tempArr;
};

var squareRoot = arr.mymap(function(num) {
  return Math.sqrt(num);
});

console.log(squareRoot);

