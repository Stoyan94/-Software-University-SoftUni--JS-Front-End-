function printDNA(length) {
    let sequence = "ATCGTTAGGG";

    for (let i = 0; i < length; i++) {
        let currentSymbol = sequence[i % sequence.length];

        if (i % 4 === 0) {
            console.log(`**${currentSymbol}**`);
        } else if (i % 4 === 1 || i % 4 === 3) {
            console.log(`*${currentSymbol}--${sequence[(i + 2) % sequence.length]}*`);
        } else {
            console.log(`${currentSymbol}----${sequence[(i + 2) % sequence.length]}`);
        }
    }
}


printDNA(4);