let p = new Promise((resolve, reject) => {
    var a = 1 + 1;
    if (a === 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
})

p.then()