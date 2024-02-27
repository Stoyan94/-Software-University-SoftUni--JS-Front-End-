function solve (currSpeed, area) {

    const motorwayMaxSpeed = 130;
    const interstateMaxSpeed = 90;
    const cityMaxSpeed = 50;
    const residentialMaxSpeed = 20;

    const speeding = 20;
    const excessiveSpeeding = 40; 
    
    let dataSpeed = currSpeed;

    isSpeedMore = false;

    switch (area) {
        case 'motorway':
            
        if (currSpeed > motorwayMaxSpeed) {

            currSpeed -= motorwayMaxSpeed;
            isSpeedMore = true;
        }
            break;
        
        case 'interstate':

        if (currSpeed > interstateMaxSpeed ) {
            
            currSpeed -= interstateMaxSpeed;
            isSpeedMore = true;
        }
        
            break;

        case 'city':
        
        if (currSpeed > cityMaxSpeed) {
            
            currSpeed -= cityMaxSpeed;
            isSpeedMore = true;
        }
        
            break;

        case 'residential':
            
        if (currSpeed > residentialMaxSpeed) {
            
            currSpeed -= residentialMaxSpeed;
            isSpeedMore = true;
        }

            break;
    }

    if (isSpeedMore) {
        
        if (dataSpeed > motorwayMaxSpeed ) {
            
            console.log(`The speed is ${currSpeed} km/h faster than the allowed speed of 130 - reckless driving`);
        }
        else if (dataSpeed > interstateMaxSpeed) {

            console.log(`The speed is ${currSpeed} km/h faster than the allowed speed of 90 - excessive speeding`);
        }
        else if (dataSpeed > cityMaxSpeed) {
            
            console.log(`The speed is ${currSpeed} km/h faster than the allowed speed of 50 - excessive speeding`);
        }
        else if (dataSpeed > residentialMaxSpeed) {
            
            console.log(`The speed is ${currSpeed} km/h faster than the allowed speed of 50 - excessive speeding`);

        }

        return
    }

    console.log(`Driving 40 km/h in a 50 zone`);
}

solve (200, 'interstate');