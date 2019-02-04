
/*****************NATIVE EVERY*************************/

var arr = [1, 30, 39, 29, 10, 13];

Array.prototype.myEvery = function(func) {
  for (var i = 0; i < this.length; i++) {
    if (!func(this[i])) {
      return false;
    }
  }
  return true;
};

var isBelowTwenty = arr.myEvery(function(num) {
  return num < 20;
});

console.log(isBelowTwenty);


