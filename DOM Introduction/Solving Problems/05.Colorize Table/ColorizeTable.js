function colorize() {
    const evenRowElemets =document.querySelectorAll('table tr:nth-child(2n)')

    for (const evenRow of evenRowElemets) {
        evenRow.style.backgroundColor = 'teal'
    }
    
    //evenRowElemets.forEach(elemet => elemet.style.backgroundColor = 'teal')
}

// function colorize() {
//     const rows = document.getElementsByTagName('tr');

//     for (let i = 1; i < rows.length ; i++) {
//         if (i % 2 === 0) {
//             rows[i - 1].style.background = 'teal'
//         }
//     }
// }