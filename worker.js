
self.addEventListener('error', (e) => {
  console.log('error caught in worker.js', e.error);
});

function f1() {
  throw new Error('error from worker.js');
}
function f2() {
  return f1() + 1;
}
function f3() {
  return f2() + 1;
}
setTimeout(() => f3(), 4000);

// note that  service worker is loaded from localhost
// importscripts is loading from 127.0.0.1
// they are from different domains
importScripts('http://127.0.0.1:3000/script1.js');
