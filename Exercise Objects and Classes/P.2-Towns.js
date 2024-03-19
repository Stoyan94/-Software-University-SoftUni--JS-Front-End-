function solve(townsInfo) {
   townsInfo
        .map(row => row.split(' | '))
        .map(([townName, latitude, longitude]) => (
            {
                town: townName,
                latitude: Number(latitude).toFixed(2),
                longitude: Number(longitude).toFixed(2)
            }))
            .forEach(town => console.log(town));
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)