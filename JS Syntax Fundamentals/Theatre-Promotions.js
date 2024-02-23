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

    if (day == 'Weekday') {
                     
        if (age >=0 || age <=18) {
            ticketPrice = weekdayMaxAge18price;
        }
    }

    console.log(ticketPrice)
    
}

solve('Weekday', 12)