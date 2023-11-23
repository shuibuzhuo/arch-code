import("./test.js").then((mod) => {
  console.log("mod", mod);
  console.log("a", mod.a);
});

console.log("this", this);
