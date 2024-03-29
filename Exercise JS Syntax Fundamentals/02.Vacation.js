function solve(countPeopels, typePeopels, day) {

    const studentsFridayPrice = 8.45;   
    const studentsSaturdayPrice = 9.80;   
    const studentsSundayPrice = 10.46;
    
    const businessFridayPrice = 10.90;
    const businessSaturdayPrice = 15.60;
    const businessSundayPrice = 16.00;

    const regularFridayPrice = 15;
    const regularSaturdayPrice = 20;
    const regularSundayPrice = 22.50;

    let totalPrice; 

    switch (typePeopels) {
        case 'Students':
            
            if (day === 'Friday') {
                totalPrice = countPeopels * studentsFridayPrice;
            }
            else if (day === 'Saturday') {
                totalPrice = countPeopels * studentsSaturdayPrice;
            }
            else if (day === 'Sunday') {
                totalPrice = countPeopels * studentsSundayPrice;        
            }

            if (countPeopels >= 30) {
                totalPrice *= 0.85;
            } 

            break;

        case 'Business':   
        
        let pricePerPerson;

        if (day === 'Friday') {
            totalPrice = countPeopels * businessFridayPrice;
            pricePerPerson = businessFridayPrice;
        }
        else if (day === 'Saturday') {
            totalPrice = countPeopels * businessSaturdayPrice;
            pricePerPerson = businessSaturdayPrice;
        }
        else if (day === 'Sunday') {
            totalPrice = countPeopels * businessSundayPrice;    
            pricePerPerson = businessSundayPrice;  
        }

        if (countPeopels >= 100) {
            totalPrice -= pricePerPerson * 10;
        }
        
        case 'Regular':

        if (day === 'Friday') {
            totalPrice = countPeopels * regularFridayPrice;
        }
        else if (day === 'Saturday') {
            totalPrice = countPeopels * regularSaturdayPrice;
        }
        else if (day === 'Sunday') {
            totalPrice = countPeopels * regularSundayPrice;        
        }

        if (countPeopels >= 10 && countPeopels <=20) {
            totalPrice *= 0.95;
        } 
        
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

