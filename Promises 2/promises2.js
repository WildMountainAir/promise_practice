// Promise Syntax
// let p = new Promise((resolve, reject) => { // takes in resolve and reject
//     let a = 1 + 1; // promise definition
//     if (a === 2) { // conditions for fail or success
//         resolve('Success'); // resolve method called
//     } else {
//         reject('Failed'); // reject method called
//     }
// })

// p.then((message) => { // if successful
//     console.log('This is in the then ' + message);
// }).catch((message) => { // if error
//     console.log('This is in the catch ' + mesage);
// })

// Promises with Callbacks
const userLeft = false;
const userWatchingCatMeme = false;
// WITH CALLBACKS
const watchTutorialCallback = (callback, errorCallback) => {
  if (userLeft) {
      errorCallback({
          name: 'User Left',
          message: ':('
      });
  } else if (userWatchingCatMeme) {
      errorCallback({
          name: 'User Watching Cat Meme',
          message: 'WebDevSimplified < Cat'
      });
  } else {
      callback('Thumbs Up and Subscribe');
  }
}

watchTutorialCallback((message) => {
    console.log('Success ' + message);
}, (error) => {
    console.log(error.name + ' ' + error.message);
});
// WITH PROMISES
const watchTutorialPromise = () => { // we can remove callback params because we don't need to use them with Promises
    return new Promise((resolve, reject) => {// return a promise which takes in 2 params resolve and reject
        if (userLeft) {
            reject({ // errorCallback is now the reject method
                name: 'User Left',
                message: ':('
            });
        } else if (userWatchingCatMeme) {
            reject({// errorCallback is now the reject method
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            });
        } else { // callback is now the resolve method
            resolve('Thumbs Up and Subscribe');
        }
    }); 
  }

  watchTutorialPromise() // we dont need to take any callback params in
    .then((message) => { // resolve method
    console.log('Success ' + message);
    })
    .catch((error) => { // reject method
    console.log(error.name + ' ' + error.message);
});