(function (global) {
  function request() {
    return {
      code: 200,
      data: {
        scores: [90, 95, 88, 35, 55, 91],
      },
    };
  }

  global.__Module_REQUEST = {
    request,
  };
})(window);
