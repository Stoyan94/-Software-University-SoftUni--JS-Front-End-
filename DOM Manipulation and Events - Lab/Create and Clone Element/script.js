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