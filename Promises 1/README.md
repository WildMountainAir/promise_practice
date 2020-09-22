## What is a promise?
A promise is a method that eventually produces a value. It can be considered the asynchronous counterpart of a "getter function." Its essence can be explained as:

promise.then(function(value) {
  // Do something with the 'value'
});

Promises can replace the asynchronous use of callbacks, and they provide several benefits over them. They start to gain ground as more and more libraries and frameworks embrace them as their primary way to handle asynchronicity.

## Getting the rsvp.js Library
Promises, and rsvp.js, can be used both on the server and on the client side. To install it for nodejs, go to your project folder and type:

`npm install --save rsvp`

If you work on the front-end and use bower

`bower install -S rsvp`

If you just want to get right in the game, you can include it via simple script tag (and with jsbin, you can add it via the “Add library” dropdown):

`<script src="//cdn.jsdelivr.net/rsvp/3.0.6/rsvp.js"></script>`

## What properties does a promise have?
A promise can be in one of three states: *pending*, *fulfilled*, or *rejected*. When created, the promise is in pending state. From here, it can either go to the fulfilled or rejected state. We call this transition the resolution of the promise. The resolved state of a promise is its final state, so once it is fulfilled or rejected, it stays there.

The way to create a promise in rsvp.js is via what is called a revealing constructor. This type of constructor takes a single function parameter and immediately calls it with two arguments, fulfill and reject, that can transition the promise to either the fulfilled or the rejected state:

```
var promise = new RSVP.Promise(function(fulfill, reject) {
  (...)
});
```

This JavaScript promises pattern is called a revealing constructor because the single function argument reveals its capabilities to the constructor function, but ensures consumers of the promise cannot manipulate its state.

Consumers of the promise can react to its state changes by adding their handler through the then method. It takes a fulfillment and a rejection handler function, both of which can be missing.

`promise.then(onFulfilled, onRejected);`

Depending on the result of the promise’s resolution process, either the onFulfilled or the onRejected handler is called asynchronously.