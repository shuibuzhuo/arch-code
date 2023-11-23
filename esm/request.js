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

export default {
  num,
  request,
  getNum,
};
