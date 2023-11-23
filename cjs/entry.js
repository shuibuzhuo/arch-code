const req = require("./request");
const { average, fail } = require("./handle");

const scores = req.request().data.scores;
console.log(average(scores));
console.log(fail(scores));

console.log(req.num);
req.num = 200;
console.log(req.num);
console.log(req.getNum());

exports.name = "shuibuzhuo";
exports.age = 20;
