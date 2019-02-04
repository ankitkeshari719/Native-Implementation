/*****************NATIVE FOR_EACH*************************/

var arr = [1, 2, 3, 4];

Array.prototype.myEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

var squareRoot = arr.myEach(function(num) {
  return console.log(num);
});



