console.log('Hello from an external javascript');

const textInputElement = document.getElementById('uName')
console.log(textInputElement);


// setTimeout(() => {
//     textInputElement.value = 'neshto'
// }, 2000);

const fancyInputElements = document.getElementsByClassName('fancy-input')
console.log(fancyInputElements);

// Get first input type text
const firstInputTextElement = document.querySelector('.fancy-input[type=text]')
console.log(firstInputTextElement);

// Get all input type text elements
const inputTextElements = document.querySelectorAll('.fancy-input[type=text]')
console.log(inputTextElements);

// NodeList vs HTMLCollection
console.log();
const contentStaticNodeLsit = document.querySelectorAll('#content > *')
console.log(contentStaticNodeLsit);
const contentElement = document.querySelector('#content')
const contentLiveNodeList = contentElement.childNodes;
const contentLiveHtmlCollection = contentElement.children;
console.log(contentLiveNodeList);
console.log(contentLiveHtmlCollection);

// Iterate collections
console.log('Iterate collections');

console.log('HTML Collection');
for (const htmlCollection of contentLiveHtmlCollection) {
    console.log(htmlCollection);
}

console.log('Node Elements');
for (const nodeElement of contentLiveNodeList) {
    console.log(nodeElement);   
}

// for node list we can use and forEach
console.log('ForEach nodes');
contentLiveNodeList.forEach(nodeElement => console.log(nodeElement))

// Convert to array
console.log('Array version');
console.log('HTML Collection array');
// let htmlElementsArray = Array.from(contentLiveHtmlCollection)
let htmlElementsArray = [...contentLiveHtmlCollection]
console.log(htmlElementsArray);

console.log('Nodes array');
// let htmlNodessArray = Array.from(contentLiveNodeList)
let htmlNodessArray = [...contentLiveNodeList]
console.log(htmlNodessArray);

// Get parent
console.log(firstInputTextElement.parentElement);
console.log(firstInputTextElement.parentNode);