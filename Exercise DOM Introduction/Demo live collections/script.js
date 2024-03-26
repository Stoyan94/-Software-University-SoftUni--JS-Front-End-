const movieListElement = document.getElementById('movies');

const liveElementCollection = movieListElement.children;
const liveNodeList = movieListElement.childNodes;

const staticNodeList = document.querySelectorAll('#movies li');

console.log(liveElementCollection);
console.log(liveNodeList);
console.log(staticNodeList);
console.log('*************');
setTimeout(() => {
    const movieLiItem = document.createElement('li');
    movieLiItem.textContent = 'Ghost';
    movieListElement.appendChild(movieLiItem);
    
    console.log(liveElementCollection);
    console.log(liveNodeList);
    console.log(staticNodeList);
}, 3000);


// Node List can be static and live...depends on method we use

// HTMLCollections are live collections that automatically update when the underlying document structure changes. Here are methods that return HTMLCollections:

// document.getElementsByTagName(): Returns a live HTMLCollection of elements with the given tag name.

// document.getElementsByClassName(): Returns a live HTMLCollection of elements that have the given class name.

// document.getElementsByName(): Returns a live HTMLCollection of elements with the given name attribute.

// ParentNode.children: Returns a live HTMLCollection of the child elements of the given parent node.
