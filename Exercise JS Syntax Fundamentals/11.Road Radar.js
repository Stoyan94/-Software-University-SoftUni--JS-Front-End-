function solve (currSpeed, area) {

    const motorwayMaxSpeed = 130;
    const interstateMaxSpeed = 90;
    const cityMaxSpeed = 50;
    const residentialMaxSpeed = 20;

    const speeding = 20;
    const excessiveSpeeding = 40; 

    let status; 
    let currZoneSpeed;

    isSpeedMore = false;

    switch (area) {
        case 'motorway':
            
        if (currSpeed > motorwayMaxSpeed) {

            currSpeed -= motorwayMaxSpeed;
            isSpeedMore = true;
        }

        currZoneSpeed = motorwayMaxSpeed;
            break;
        
        case 'interstate':

        if (currSpeed > interstateMaxSpeed ) {
            
            currSpeed -= interstateMaxSpeed;
            isSpeedMore = true;
        }
        
        currZoneSpeed = interstateMaxSpeed;

            break;

        case 'city':
        
        if (currSpeed > cityMaxSpeed) {
            
            currSpeed -= cityMaxSpeed;
            isSpeedMore = true;
        }
        
        currZoneSpeed = cityMaxSpeed;

            break;

        case 'residential':
            
        if (currSpeed > residentialMaxSpeed) {
            
            currSpeed -= residentialMaxSpeed;
            isSpeedMore = true;
        }

        currZoneSpeed = residentialMaxSpeed;

            break;
    }

    if (currSpeed > 0 && currSpeed <= speeding) {
        
        status = 'speeding';
    }
    else if (currSpeed > speeding && currSpeed <= excessiveSpeeding) {
        
        status = 'excessive speeding';
    }
    else {
        
        status = 'reckless driving';
    }

    if (isSpeedMore) {
        
        if (area === 'motorway' ) {
            
            console.log(`The speed is ${currSpeed} km/h faster than the allowed speed of 130 - ${status}`);
        }
        else if (area === 'interstate') {

            console.log(`The speed is ${currSpeed} km/h faster than the allowed speed of 90 - ${status}`);
        }
        else if (area === 'city') {
            
            console.log(`The speed is ${currSpeed} km/h faster than the allowed speed of 50 - ${status}`);
        }
        else if (area === 'residential') {
            
            console.log(`The speed is ${currSpeed} km/h faster than the allowed speed of 20 - ${status}`);

        }
        
        return
    }
    
    console.log(`Driving ${currSpeed} km/h in a ${currZoneSpeed} zone`);
}

