// const arr = [1, 2, 3, 4, 5];

//this, for, callback

Array.prototype.map2 = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i));
  }
  return result;
};

const newArr = arr.map2((e, i) => e + i);
console.log(newArr);

// const arr = [1, 2, 3, 4, 5];

Array.prototype.filter2 = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      result.push(this[i]);
    }
  }
  return result;
};

const newArr2 = arr.filter2((e, i) => e > 2);
console.log(newArr2);

const arr = [1, 2, 3, 4, 5];

Array.prototype.reduce2 = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum = sum + this[i];
  }
  return sum;
};

const newArr3 = arr.reduce2();
console.log(newArr3);
