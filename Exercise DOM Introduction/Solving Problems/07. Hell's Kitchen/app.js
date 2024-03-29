function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
         const addWorkersElement = document.querySelector('#inputs textarea');
         const bestRestaurantElement = document.querySelector('#bestRestaurant p');
         const bestRestaurantsWorkersElements = document.querySelector('#workers p');   

         const allResturants = [];           

         const inputTextarea = JSON.parse(addWorkersElement.value);        

         for (const restaurants of inputTextarea) {

            const currResturant = {
               name,
               workers: [],
            }; 

             const [restaurantName, workers] = restaurants.split(' - ');

             currResturant.name = restaurantName;

             const workersAndSalary = workers.split(', ')

             for (const workersInfo of workersAndSalary) {
                  const [worker, salary] = workersInfo.split(' ');

                  currWorker = { name: worker, salary: salary };
                  currResturant.workers.push(currWorker);
             }
             allResturants.push(currResturant);
         }

         const averageSalaries = allResturants.map(restaurant => {

            const totalSalary = restaurant.workers.reduce((acc, worker) => {
                return acc + parseInt(worker.salary);
            }, 0);      

            const totalWorkers = restaurant.workers.length;     

            const averageSalary = totalSalary / totalWorkers;     
            return {
                restaurantName: restaurant.name,
                averageSalary: Number(averageSalary.toFixed(2))
            };
        });

         const maxAverageSalary = Math.max(...averageSalaries.map(restaurant => restaurant.averageSalary));

         const bestRestaurants = averageSalaries.filter(restaurant => restaurant.averageSalary === maxAverageSalary)

         const bestRestaurantsInfo = allResturants.filter(restaurant => restaurant.name === bestRestaurants[0].restaurantName);

         const bestSalary = bestRestaurantsInfo.map(restaurant => {         
            const salaries = restaurant.workers.map(worker => worker.salary);   

            return Math.max(...salaries).toFixed(2);
        });

         bestRestaurantElement.textContent = `Name: ${bestRestaurants[0].restaurantName} Average Salary: ${maxAverageSalary} Best Salary: ${bestSalary}`

         const printWorkers = [];

      for (const restaurant of bestRestaurantsInfo) {
          const workers = restaurant.workers;
      
          for (const worker of workers) {               
              printWorkers.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
          }
      }

      bestRestaurantsWorkersElements.textContent = printWorkers.join(' ');

      addWorkersElement.value = '';
   }

}


["PizzaHut - Peter 500, George 300, Mark 800",
"TheLake - Bob 1300, Joe 780, Jane 660"]

// •	Display the best restaurant of all the added restaurants with its average salary and best salary. 
// •	If there is a restaurant in the input array that is added more than once, 

// you need to add new workers to the old ones and update the values of the average salary and the best salary.
// •	The best restaurant is the restaurant with the highest average salary. 

//If two restaurants have the same average salary the best restaurant is the first one added.
// •	Display all workers in the best restaurant with their salaries.
// The best restaurant's workers should be sorted by their salaries in descending order.

