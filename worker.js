
self.addEventListener('error', (e) => {
  console.log('caught in worker.js', e);
});

function f1() {
  throw new Error('throw from worker.js');
}
function f2() {
  return f1() + 1;
}
function f3() {
  return f2() + 1;
}
setTimeout(() => f3(), 3000);

// note that  service worker is loaded from localhost
// importscripts is loading from 127.0.0.1
// they are from different domains
// importScripts('/script1.js');
importScripts('http://127.0.0.1:3000/script1.js');
