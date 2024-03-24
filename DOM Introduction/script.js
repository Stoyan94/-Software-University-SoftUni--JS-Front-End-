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