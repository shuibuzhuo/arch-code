let a = 1;

exports.a = a;
exports.plus = function () {
  a++;
};
exports.getA = function () {
  return a;
};
