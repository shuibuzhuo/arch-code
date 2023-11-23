(function (global, req) {
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

  global.__Module = {
    req,
    average,
    fail,
  };
})(window, window.__Module_REQUEST);

const m = window.__Module;
const scores = m.req.request().data.scores;
console.log(m.average(scores));
console.log(m.fail(scores));
