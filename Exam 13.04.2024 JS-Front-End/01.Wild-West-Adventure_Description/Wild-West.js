function solve(input) {
    let characters = {};

    let charactersCount = input.shift();
    
    for (let i = 0; i < charactersCount; i++) {        
        let [name, hp, bullets] = input.shift().split(' ');
        characters[name] = { name: name, hp: Number(hp), bullets: Number(bullets) };
    }

    let inputLine = input.shift();

    const maximumBullets = 6;
    const maximumHP = 100;
    
    while (inputLine !== 'Ride Off Into Sunset') {
        const [command, characterName, damageOrAtacker, takeHitAtacker] = inputLine.split(' - ');
        
        const currentCharacter = characters[characterName];
        let characterHP = currentCharacter.hp;
        let characterBullets = currentCharacter.bullets;

        if (command === 'FireShot') {
            if (characterBullets > 0) {
                currentCharacter.bullets -=1;
                console.log(`${characterName} has successfully hit ${damageOrAtacker} and now has ${currentCharacter.bullets} bullets!`);
            } else {
                console.log(`${characterName} doesn't have enough bullets to shoot at ${damageOrAtacker}!`);
            }
            
        } else if (command === 'TakeHit') {
            if (characterHP - damageOrAtacker > 0) {
                currentCharacter.hp -= damageOrAtacker;                
                console.log(`${characterName} took a hit for ${damageOrAtacker} HP from ${takeHitAtacker} and now has ${currentCharacter.hp} HP!`);
            } else {
                console.log(`${characterName} was gunned down by ${takeHitAtacker}!`);
                delete characters[characterName];
            }
            
        } else if (command === 'Reload') {
            let ammountBulletsReload = 0;
            let currentBulets = characterBullets;           

            if (currentBulets === maximumBullets) {
                
                console.log(`${characterName}'s pistol is fully loaded!`);
            } else {
                ammountBulletsReload = maximumBullets - characterBullets;
                currentCharacter.bullets = maximumBullets;

                console.log(`${characterName} reloaded ${ammountBulletsReload} bullets!`);
            }
            
        } else if (command === 'PatchUp') {
            let ammountHpRecover = 0;
            let currentHP = characterHP;

            let damageOrAtackerNymber = Number(damageOrAtacker);

            if (characterHP === maximumHP) {
                console.log(`${characterName} is in full health!`);
            } else {
                if (currentHP + damageOrAtackerNymber > maximumHP) {
                    currentHP+= damageOrAtackerNymber;
                    ammountHpRecover = currentHP - maximumHP;
                    currentCharacter.hp = maximumHP;                    
                } else {
                    ammountHpRecover = damageOrAtackerNymber;
                    currentCharacter.hp += damageOrAtackerNymber;
                }

                console.log(`${characterName} patched up and recovered ${ammountHpRecover} HP!`);
               
            }
            
        }

        inputLine = input.shift();
    }


    for (const currCharName in characters) {
        const character = characters[currCharName];

        console.log(character.name);
        console.log(` HP: ${character.hp}`);
        console.log(` Bullets: ${character.bullets}`);        
    }
}

solve(["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 45" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"]

);

solve(["2",
"Gus 100 0",
"Walt 100 6",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 100 - Bandit",
"Reload - Walt",
"Ride Off Into Sunset"])
