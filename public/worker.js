// getting some data via addeventlistener
self.addEventListener('message', e => {
  console.log(e);
  console.log(e.data);
  let count = 0;
  for (let i = 0; i < 1000000000; i++) {
    count += i;
  }
  // sending some data via post message
  self.postMessage({ message: count });
});
