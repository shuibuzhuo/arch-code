const { a, plus, getA } = require("./test");

console.log("a", a);
plus();
console.log("a", a);
console.log(getA());

// module.exports = {
//   name: "shuibuzhuo",
//   age: 20,
// };
exports.name = "shuibuzhuo";

console.log("this", this);
console.log("this === module.exports", this === module.exports);
