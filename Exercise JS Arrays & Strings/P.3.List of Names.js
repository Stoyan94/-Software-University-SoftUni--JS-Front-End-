function solve (names) {
    
      //localeCompare is like CompareTo in C#- the method can retutn -1 0 1
   names
   .sort((a, b) => a.localeCompare(b))
   .forEach((name, index) => console.log(`${index +1}.${name}`));

};

solve(["John", "Bob", "Christina", "Ema"]);