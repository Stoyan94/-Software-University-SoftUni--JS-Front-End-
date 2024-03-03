// The forEach() method executes a provided function
// once for each array element
// ▪ Converting a for loop to forEach

const items = ['item1', 'item2', 'item3'];
const copy1 = [];
const copy2 = [];
// For loop
for (let i = 0; i < items.length; i++) {
copy1.push(items[i]);
}
// ForEach
items.forEach(item => { copy2.push(item); });

copy2.forEach(element => {console.log(copy2);});