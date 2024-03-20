function solve(input) {
    let movies = [];

    for (const command of input) {
        let cmmArg = command.split(' ');

        if (cmmArg[0] === 'addMovie') {  
            const addMovie = {
                name: cmmArg.slice(1).join(' ')
            }
            movies.push(addMovie)
        }
        else if (cmmArg.includes('directedBy')) {
            const [movieName, director] = command.split(` directedBy `);
            const movie = movies.find(movie => movie.name === movieName)

            if (movie) {
                movie.director = director;
            }
        }
        else {
            const [movieName, date] = command.split(` onDate `);
            const movie = movies.find(movie => movie.name === movieName)

            if (movie) {
                movie.date = date;
            }
        }       
    }
    movies.filter(movies => movies.director && movies.date)
    .forEach(movie => console.log(JSON.stringify(movie)))
    
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )