 const url = 'https://swapi.dev/api';
 
 fetch(`${url}/people/1`)
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(err => console.log('Something went wrong'));