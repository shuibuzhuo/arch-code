(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
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
      },
      { "./handle": 2, "./request": 3 },
    ],
    2: [
      function (require, module, exports) {
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

        module.exports = {
          average,
          fail,
        };
      },
      {},
    ],
    3: [
      function (require, module, exports) {
        var num = 100;

        function request() {
          return {
            code: 200,
            data: {
              scores: [90, 95, 88, 35, 55, 91],
            },
          };
        }

        function getNum() {
          return num;
        }

        module.exports = {
          num,
          request,
          getNum,
        };
      },
      {},
    ],
  },
  {},
  [1]
);
