function phoneBookInput(params) {
    let phoneBook = {};
    
    for (const currParam of params) {
        const [name, phone] = currParam.split(' ');
        phoneBook[name] = phone;
    }

    Object.keys(phoneBook)
    .forEach(name => console.log(`${name} -> ${phoneBook[name]}`))

    // for (const name in phoneBook) {
    //     console.log(`${name} -> ${phoneBook[name]}`);
    // }
}

phoneBookInput(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);