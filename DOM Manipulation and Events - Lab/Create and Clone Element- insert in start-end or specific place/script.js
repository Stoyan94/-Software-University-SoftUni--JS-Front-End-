// Get element - DOM Query
const movieListElement = document.getElementById('movies')
const firstMovieElement = document.querySelector('.first-movie')

// Create Element
const seckondMovieElement = document.createElement('li')
seckondMovieElement.textContent = 'Kung-fu Dunk'

// Append new    Element to DOM - always the element is added to the end
movieListElement.appendChild(seckondMovieElement)

// Clone existing element
// If we don't pass true, 
// we will copy the "li" element itself (the node element), without the value in it
const firstMovieCloneElement = firstMovieElement.cloneNode(true)
firstMovieCloneElement.textContent += ' Clone'
movieListElement.appendChild(firstMovieCloneElement)

// Add element in first position with prepend
movieListElement.prepend(firstMovieCloneElement)

// Append element on specific place before another child element
// we first submit the element that we want to take the place 
// of the other element
const thirdMovie = document.createElement('li')
thirdMovie.textContent = 'Lord Of The Rings'
movieListElement.insertBefore(thirdMovie,seckondMovieElement)

// Before and After
const fourthMovieElement = document.createElement('li')
fourthMovieElement.textContent = 'Power Rangers'
// With after or before we can add more than one element

thirdMovie.after(fourthMovieElement)
//thirdMovie.before(fourthMovieElement)