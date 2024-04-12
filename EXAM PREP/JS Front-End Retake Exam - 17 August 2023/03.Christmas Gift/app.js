const baseUrl = 'http://localhost:3030/jsonstore/gifts';

const loadbuttonPresentElement = document.getElementById('load-presents');
const giftListElement = document.getElementById('gift-list');
const editButtonElement = document.getElementById('edit-present');

const addButtonElement = document.getElementById('add-present');
const presentInputElement = document.getElementById('gift');
const forInputElement = document.getElementById('for');
const priceInputElement = document.getElementById('price');

const loadPresents = async () => {
    const respone = await fetch(baseUrl);
    const presentResult = await respone.json();

    giftListElement.innerHTML = '';
    const fetchElements = Object.values(presentResult);       

    for (const element of fetchElements) {
        
        const giftNameElement = document.createElement('p');
        giftNameElement.textContent = element.gift;

        const presentForPElement = document.createElement('p');
        presentForPElement.textContent = element.for; 
        
        const pricePElement = document.createElement('p');
        pricePElement.textContent = element.price; 
        
        const contentDivElement = document.createElement('div');
        contentDivElement.classList.add('content');
        contentDivElement.appendChild(giftNameElement);
        contentDivElement.appendChild(presentForPElement);
        contentDivElement.appendChild(pricePElement);

        const buttonChangeOnSock = document.createElement('button');
        buttonChangeOnSock.classList.add('change-btn');
        buttonChangeOnSock.textContent = 'Change';

        const buttonDeleteOnSock = document.createElement('button');
        buttonDeleteOnSock.classList.add('delete-btn');
        buttonDeleteOnSock.textContent = 'Delete';
        
        const buttonContainerDivEl = document.createElement('div');
        buttonContainerDivEl.classList.add('buttons-container');
        buttonContainerDivEl.appendChild(buttonChangeOnSock);
        buttonContainerDivEl.appendChild(buttonDeleteOnSock);

        const giftSockDivElement = document.createElement('div');
        giftSockDivElement.classList.add('gift-sock');
        giftSockDivElement.appendChild(contentDivElement);
        giftSockDivElement.appendChild(buttonContainerDivEl);

        giftListElement.appendChild(giftSockDivElement);
        
        const presentId = element._id;

        buttonChangeOnSock.addEventListener('click', async () => {
            
            presentInputElement.value = giftNameElement.textContent;
            forInputElement.value = presentForPElement.textContent;
            priceInputElement.value = pricePElement.textContent;

            const gift = presentInputElement.value;
            const giftFor = forInputElement.value;
            const price = priceInputElement.value;
            
            giftSockDivElement.innerHTML = '';

            editButtonElement.disabled = false;
            addButtonElement.disabled = true; 

            const responese = await fetch(`${baseUrl}/${presentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'aplication/json',
                },
                body: JSON.stringify({_id: presentId
                    ,gift
                    , for: giftFor
                    , price})
            });
            
            if (!respone.ok) {
                return;
            }

            loadPresents();
            
            editButtonElement.addEventListener('click', () => {
                editButtonElement.disabled = true;
                addButtonElement.disabled = false; 
            })

        });

        buttonDeleteOnSock.addEventListener('click', async() => {

            const response = await fetch(`${baseUrl}/${presentId}`,{
                method: 'DELETE'
            });

            giftSockDivElement.remove();
        });
        
    }
};

loadbuttonPresentElement.addEventListener('click', loadPresents);

addButtonElement.addEventListener('click', async () => {
    const gift = presentInputElement.value;
    const giftFor = forInputElement.value;
    const price = priceInputElement.value;

    const respone = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify({
            gift,
            for: giftFor,
            price,
        }),
    });

    if (!respone.ok) {
        return;
    }

    loadPresents();

    presentInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';

});
