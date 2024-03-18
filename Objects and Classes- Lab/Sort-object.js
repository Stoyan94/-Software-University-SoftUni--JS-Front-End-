const phoneBook = {
    Tim: '0834212554',
 Peter: '0877547887',
 Bill: '0896543112', 
}

// Sort by key
let sortedPhoneBookByKey = Object
    .entries(phoneBook)
    .sort((a, b) => a[0].localeCompare(b[0]));

    console.log(Object.fromEntries(sortedPhoneBookByKey));

// Sort by value
let sortedPhoneBookByValue = Object
    .entries(phoneBook)
    .sort((a, b) => a[1].localeCompare(b[1]));
    
    console.log(Object.fromEntries(sortedPhoneBookByValue))

// With destructuring
let sortWay2 = Object
    .entries(phoneBook)
    .sort(([keyA],[keyB]) => keyA.localeCompare(keyB));
    
    console.log(Object.fromEntries(sortWay2));