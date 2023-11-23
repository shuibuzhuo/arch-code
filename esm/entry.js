import req from "./request.js";
import handle from "./handle.js";

const scores = req.request().data.scores;
console.log(handle.average(scores));
console.log(handle.fail(scores));

console.log(req.num);
req.num = 200;
console.log(req.num);
console.log(req.getNum());
