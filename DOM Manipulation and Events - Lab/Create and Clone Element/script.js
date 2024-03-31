// Get element - DOM Query
const movieListElement = document.getElementById('movies')
const firstMovieElement = document.querySelector('.first-movie')

// Create Element
const seckondMovieElement = document.createElement('li')
seckondMovieElement.textContent = 'Kung-fu Dunk'

// Append Element to DOM - always the element is added to the end
movieListElement.appendChild(seckondMovieElement)