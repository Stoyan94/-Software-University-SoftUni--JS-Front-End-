function solve(input) {
    input
        .map(row => row.split(' / '))
        .map(([name, level, items]) => ({
            name,
            level,
            items,
        }))
        .sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items}`);
        });
}

function solve2(input) {
    input
        .map(row => row.split(' / '))
        .reduce((acc, [name, level, items]) => {
            acc.push({
                name,
                level,
                items,
            });
            return acc;
        }, [])
        .sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items}`);
        });
}

solve2([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )