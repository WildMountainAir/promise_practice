#Promises Notes

A promise in javascript is just like a promise in real life. You can promise to do something there are two possible results.
1) that promise is completed and therefore resolved
2) that promise is failed and there fore rejected

## Syntax
A new Promise takes in an anonymous function that takes in a resolve and a reject. 
Define what the actual promise is 
If the promise completes you would resolve it
You can pass anything into the resolve function, like a success message.
Else if the promise fails you reject it
You can pass anything into the reject function, like a failed message.

Anything in a .then() is going to happen after a resolve