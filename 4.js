function repeat(a, b) {
  while (b !== 0) {
    a();
    b--;
  }
}

function hello() {
  console.log("Hello");
}
repeat(hello, 2);
