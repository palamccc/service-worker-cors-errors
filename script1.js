self.addEventListener('error', (e) => {
  console.log('caught in script1.js', e);
});
function ff1() {
  throw new Error('throw from script1.js');
}
function ff2() {
  return ff1() + 1;
}
function ff3() {
  return ff2() + 1;
}
setTimeout(() => ff3(), 4000);