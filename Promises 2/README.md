# Promises Notes

A promise in javascript is just like a promise in real life. You can promise to do something there are two possible results.
1) that promise is completed and therefore resolved
2) that promise is failed and therefore rejected

## Syntax
A new Promise takes in an anonymous function that takes in a resolve and a reject. 
Define what the actual promise is 
If the promise completes you would resolve it using the resolve method
- You can pass anything into the resolve function, like a success message.
Else if the promise fails you reject it using the reject method
- You can pass anything into the reject function, like a failed message.

Anything in a .then() is going to happen after/for a resolve
.then takes in a method, define that method

To catch errors use the .catch() method, which will catch any errors which are our reject states
.catch takes in a method, define that method

.then is called when our Promise resolves successfully, and .catch is called when our Promise fails and is rejected.

## Notes
Promises are useful when you want something done in the background that might take some time, like downloading an image from a different server.

Without promises callbacks can require you to nest and nest and nest causing "callback hell", promises allow you to chain .then methods to avoid