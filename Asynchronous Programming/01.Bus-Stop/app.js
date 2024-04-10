function getInfo() {
   const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
   const stopIdInputElement = document.getElementById('stopId');
   const stopNameElement = document.getElementById('stopName');
   const bussElement = document.getElementById('buses');

    const stopId = stopIdInputElement.value;
    fetch(`${baseUrl}/${stopId}`)
        .then(response => response.json())
        .then(data =>{ stopNameElement.textContent = data.name;

            for (const busId in data.buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
                bussElement.appendChild(liElement);
            }
        })
        .catch(() => stopNameElement.textContent ='Error');
};