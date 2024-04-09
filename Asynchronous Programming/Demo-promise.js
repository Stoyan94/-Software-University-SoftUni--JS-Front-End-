const newCarPromise = new Promise((resolve, reject) => {
    if (Math.random() < 0.3) {
        return reject('Need more money')
    }

    setInterval(() => {
        resolve('New car')
    }, 3000);
})


newCarPromise.then((message) => {
       console.log(message);
}).catch(message => {
    console.log(message);
    
    // finaly method always will execute 
}).finally(() => {
    console.log('Work harder and you will success');
})

// Always rejecting promise
const rejectingPromise = Promise.reject('Work for more money')
console.log(rejectingPromise);
rejectingPromise.catch((message) => console.log(message));

// Always reselve promise
const resolvePromise = Promise.reject('Congrat new Nissan-GTR')
console.log(resolvePromise);
resolvePromise.catch((message) => console.log(message));