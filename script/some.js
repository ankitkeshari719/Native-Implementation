/*****************NATIVE SOME*************************/

var arr = [1, 30, 39, 29, 10, 13];

Array.prototype.mySome = function(func) {
  for (var i = 0; i < this.length; i++) {
    if (func(this[i])) {
        return true;
    }
  }
  return false;
};

var isBelowTwenty = arr.mySome(function(num) {
  return num < 20;
});

console.log(isBelowTwenty);

