function log(msg) {
  console.log(`%c[${self.location.search}] ${msg}`, 'background-color:#ffffcc;color:black');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

self.addEventListener('install', (e) => {
  log('⚡install');
  e.waitUntil(sleep(3000));
  sleep(6000).then(() => self.skipWaiting());
});

self.addEventListener('activate', (e) => {
  log('⚡activate');
  e.waitUntil(clients.claim());
});

self.addEventListener('message', (e) => {
  log(`⚡message.received ${e.data}`);
});
