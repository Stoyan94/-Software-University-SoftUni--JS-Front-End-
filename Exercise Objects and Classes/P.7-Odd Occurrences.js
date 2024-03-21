function solve(words) {
    const occurrences = {};

    words.toLowerCase().split(' ')
                        .reduce((acc , word) => {
                            
                            if (!occurrences.hasOwnProperty(word)) {
                                occurrences[word] = 0;                                
                            }
                              occurrences[word] +=1; 

                            return acc;
                        }, {})

    const filter = Object.entries(occurrences)
                        .filter(([key, value]) => value % 2 !== 0)
                        .map(([key, value]) => key);

   console.log(filter.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
