const beaseURL = 'http://localhost:3030/jsonstore/games';

const loadGamesButton = document.getElementById('load-games');
const gameListEl = document.getElementById('games-list');

const addGameButtonEl = document.getElementById('add-game');
const inputNameGame = document.getElementById('g-name');
const inputTypeGame = document.getElementById('type');
const inputMaxPlayer = document.getElementById('players');

const editButtonGame = document.getElementById('edit-game');

const loadGames = async () => {
    const respone = await fetch(beaseURL);
    const gamesResult = await respone.json();

    gameListEl.innerHTML = '';
    const fetchElements = Object.values(gamesResult); 

    for (const gamesInfo of fetchElements) {
        // Paragraphs
        const gameNamePrEl = document.createElement('p');
        gameNamePrEl.textContent = gamesInfo.name;

        const playersCountPrEl = document.createElement('p');
        playersCountPrEl.textContent = gamesInfo.players;

        const typeGamePrEl = document.createElement('p');
        typeGamePrEl.textContent = gamesInfo.type;
        // Div pr content
        const divContent = document.createElement('div');
        divContent.classList.add('content');
        divContent.appendChild(gameNamePrEl);
        divContent.appendChild(playersCountPrEl);
        divContent.appendChild(typeGamePrEl);
        // Div for div content- board-game
        const divboardGameEl = document.createElement('div');
        divboardGameEl.classList.add('board-game');
        divboardGameEl.appendChild(divContent);
        // Buttons change, delete
        const buttonChange = document.createElement('button');
        buttonChange.classList.add('change-btn');
        buttonChange.textContent = 'Change'

        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete-btn');
        buttonDelete.textContent = 'Delete';
        // Div for buttons
        const divButtonsEl = document.createElement('div');
        divButtonsEl.classList.add('buttons-container');
        divButtonsEl.appendChild(buttonChange);
        divButtonsEl.appendChild(buttonDelete);
        // Append buttons to board game
        divboardGameEl.appendChild(divButtonsEl);

        // Append all to game list
        gameListEl.appendChild(divboardGameEl);

        const gameId = gamesInfo._id;

        buttonChange.addEventListener('click', async () => {
            
            inputNameGame.value = gameNamePrEl.textContent;
            inputTypeGame.value = typeGamePrEl.textContent;           
            inputMaxPlayer.value = playersCountPrEl.textContent;

            const name = inputNameGame.value;
            const type = inputTypeGame.value;
            const players = inputMaxPlayer.value
            
            divboardGameEl.innerHTML = '';

            editButtonGame.disabled = false;
            addGameButtonEl.disabled = true;          


            const responese = await fetch(`${beaseURL}/${gameId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'aplication/json',
                },
                body: JSON.stringify({_id: gameId
                    ,name
                    ,type
                    ,players})
            });
            
            if (!respone.ok) {
                return;
            }

            loadGames();
            
            editButtonGame.addEventListener('click', () => {
                editButtonGame.disabled = true;
                addGameButtonEl.disabled = false; 
            })            
        });

        buttonDelete.addEventListener('click', async() => {

            const response = await fetch(`${beaseURL}/${gameId}`,{
                method: 'DELETE'
            });

            divboardGameEl.remove();

            loadGames();
        });
    }
}

addGameButtonEl.addEventListener('click', async () => {
    const name = inputNameGame.value;
    const type = inputTypeGame.value;
    const players = inputMaxPlayer.value;

    const respone = await fetch(beaseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify({
            name,
            type,
            players,
        }),
    });

    if (!respone.ok) {
        return;
    }

    loadGames();

    inputNameGame.value= '';
    inputTypeGame.value = '';
    inputMaxPlayer.value = '';

});

loadGamesButton.addEventListener('click', loadGames);