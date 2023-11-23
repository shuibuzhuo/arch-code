(function (global) {
  var num = 100;

  function request() {
    return {
      code: 200,
      data: {
        scores: [90, 95, 88, 35, 55, 91],
      },
    };
  }

  function average(scores) {
    const total = scores.reduce(function (res, score) {
      return res + score;
    }, 0);

    return `你的平均分是${total / scores.length}。`;
  }

  function fail(scores) {
    const failScores = scores.filter((score) => score < 60);

    return `很抱歉，你有${failScores.length}次不合格。`;
  }

  function getNum() {
    return num;
  }

  function setNum(newValue) {
    num = newValue;
  }

  global.__Module = {
    request,
    average,
    fail,
    num,
    getNum,
    setNum,
  };
})(window);

const m = window.__Module;
const scores = m.request().data.scores;
console.log("average", m.average(scores));
console.log("fail", m.fail(scores));
console.log(m.num);
m.num = 200;
console.log(m.num);
console.log(m.getNum());
