// Multiple parallel promises
const createTimeoutPromise = function (message, time){
    return new Promise((resolve,reject) => {
         setInterval(() => {
             resolve(message)
         }, time);
     });
 }
 
 // Try Promise.allSettled
// if one of all promises return reject, all will be rejected
 const groupPromise = Promise.all([
     Promise.resolve('first promise'),
     createTimeoutPromise('second promise', 3000),
     createTimeoutPromise('third promise', 100),
     Promise.reject('I will fail all promises')
 ]);
 
 groupPromise.then((values) => {
     console.log(values);
 }).catch(error => {
    console.log(error);
 })