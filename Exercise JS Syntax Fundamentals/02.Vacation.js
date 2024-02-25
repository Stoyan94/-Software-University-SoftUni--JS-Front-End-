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

        if (countPeopels >= 100) {
            countPeopels-=10;
        } 

        if (day === 'Friday') {
            totalPrice = countPeopels * businessFridayPrice;
        }
        else if (day === 'Saturday') {
            totalPrice = countPeopels * businessSaturdayPrice;
        }
        else if (day === 'Sunday') {
            totalPrice = countPeopels * businessSundayPrice;        
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

        if (countPeopels >= 30) {
            totalPrice *= 0.85;
        } 
        
    }
    
    console.log(totalPrice.toFixed(2));
}


solve(90, "Business", "Sunday")