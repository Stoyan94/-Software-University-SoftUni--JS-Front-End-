function solve (day, age) {
    
    const weekdayMaxAge18price = 12;
    const weekdayMaxAge64price = 18;
    const weekdayMaxAge122price = 12;

    const weekendMaxAge18price = 15;
    const weekenMaxAge64price = 20;
    const weekendMaxAge122price = 15;

    const holidaydMaxAge18price = 5;
    const holidayaxAge64price = 12;
    const holidayMaxAge122price = 10;

    let ticketPrice = 0;

    if (age < 0) {
        return console.log('Error!');
    }

    if (day == 'Weekday') {
                     
        if (age >64 && age <=122) {
            ticketPrice = weekdayMaxAge122price;
        }
        else if (age >18 && age <=64) {
            ticketPrice = weekdayMaxAge64price;
        }
        else if (age >=0 && age <=18) {
            ticketPrice = weekdayMaxAge18price;
        }
    }
    else if (day == 'Weekend') {
                     
        if (age >64 && age <=122) {
            ticketPrice = weekendMaxAge122price;
        }
        else if (age >18 && age <=64) {
            ticketPrice = weekenMaxAge64price;
        }
        else if (age >=0 && age <=18) {
            ticketPrice = weekendMaxAge18price;
        }
    }
    else if (day == 'Holiday') {
                     
        if (age >64 && age <=122) {
            ticketPrice = holidayMaxAge122price;
        }
        else if (age >18 && age <=64) {
            ticketPrice = holidayaxAge64price;
        }
        else if (age >=0 && age <=18) {
            ticketPrice = holidaydMaxAge18price;
        }
    }
    else {
        return console.log('Error!');
    }
   
    console.log(`${ticketPrice}$`);
    
}

