function loggerBuilder(date) {
    return function(text) {
        console.log(`${text}: ${date}`)
    };
}

const logger = loggerBuilder('14.03.2024');
const yesterdayLooger = loggerBuilder('13.03.2024');

logger('What is date today');