function attachEventsListeners2() {
    const converButtonsElements = document.querySelectorAll('input[type=button][value=Convert]');
    const inputElements = document.querySelectorAll('input[type=text]');

    const toSeconds = (value, unit) => {
        switch (unit) {
            case 'days':
               return value * 24 * 60 * 60;
            case 'hours':
                return value * 60 * 60;
            case 'minutes':
                return value * 60;
            case 'seconds':
                return value;
        }
    };
    
    const converters = {
        days(seconds){
            return seconds / 60 / 60 / 24;
        },
        hours(seconds){
            return seconds / 60 / 60;
        },
        minutes(seconds){
            return seconds / 60;
        },
        seconds(seconds){
            return seconds;
        }
    }

    for (const buttonElement of converButtonsElements) {
        buttonElement.addEventListener('click', (e) => {
            const currInputElement = e.currentTarget.previousElementSibling;

            for (const inputElement of inputElements) {
                const seconds =  inputElement.value = toSeconds(Number(currInputElement.value), currInputElement.id);
                inputElement.value = converters[inputElement.id](seconds);
            }
        })
    }
}

function attachEventsListeners() {
    document.getElementById("daysBtn").addEventListener("click", function() {
        convertTime("days");
    });

    document.getElementById("hoursBtn").addEventListener("click", function() {
        convertTime("hours");
    });

    document.getElementById("minutesBtn").addEventListener("click", function() {
        convertTime("minutes");
    });

    document.getElementById("secondsBtn").addEventListener("click", function() {
        convertTime("seconds");
    });

    function convertTime(unit) {
        let inputValue = parseFloat(document.getElementById(unit).value);

        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");

       
        switch (unit) {
            case "days":
                hours.value = inputValue * 24; 
                minutes.value = inputValue * 24 * 60;
                seconds.value = inputValue * 24 * 60 * 60;
                break;
            case "hours":
                days.value = inputValue / 24;
                minutes.value = inputValue * 60;
                seconds.value = inputValue * 60 * 60;
                break;
            case "minutes":
                days.value = inputValue / (24 * 60);
                hours.value = inputValue / 60;
                seconds.value = inputValue * 60;
                break;
            case "seconds":
                days.value = inputValue / (24 * 60 * 60);
                hours.value = inputValue / (60 * 60);
                minutes.value = inputValue / 60;
                break;
        }
        
    }
}