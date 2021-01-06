function f1() {
  throw new Error('error from script1.js');
}
function f2() {
  return f1() + 1;
}
function f3() {
  return f2() + 1;
}
setTimeout(() => f3(), 3000);