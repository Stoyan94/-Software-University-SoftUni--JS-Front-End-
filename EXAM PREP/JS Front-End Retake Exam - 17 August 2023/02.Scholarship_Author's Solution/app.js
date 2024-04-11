window.addEventListener("load", solve);

function solve() {
    const playerNameElement = document.getElementById('player');
    const scorePlayerElement = document.getElementById('score');
    const roundPlayerElement = document.getElementById('round');

    const addButtonElement = document.getElementById('add-btn');
    const dartEditListElement = document.getElementById('sure-list');   
    
    const divDartElement = document.querySelector('.dart.title-dart');

    const scoreBordeElememt = document.getElementById('scoreboard-list');

    const clearButtonElement = document.querySelector('.btn.clear');
    
    let isDelete = false;   

    addButtonElement.addEventListener('click', () => {
      const namePrElement = document.createElement('p');
      namePrElement.textContent = playerNameElement.value;

      const scorePrElement = document.createElement('p');
      scorePrElement.textContent = scorePlayerElement.value;
      
      const roundPrElement = document.createElement('p');
      roundPrElement.textContent = roundPlayerElement.value;

      const articleElelemt = document.createElement('article');
      articleElelemt.appendChild(namePrElement);
      articleElelemt.appendChild(scorePrElement);
      articleElelemt.appendChild(roundPrElement);

      const buttonEdint = document.createElement('button');
      buttonEdint.classList.add('btn');
      buttonEdint.classList.add('edit');
      buttonEdint.textContent = 'edit';

      const buttonOk = document.createElement('button');
      buttonOk.classList.add('btn');
      buttonOk.classList.add('ok');
      buttonOk.textContent = 'ok';      

      const liElementDartItem = document.createElement('li');
      liElementDartItem.classList.add('dart-item');
      liElementDartItem.appendChild(articleElelemt);
      liElementDartItem.appendChild(buttonEdint);
      liElementDartItem.appendChild(buttonOk);
      
      if (isDelete) {    
        isDelete = false;    
        dartEditListElement.appendChild(liElementDartItem);
        divDartElement.appendChild(dartEditListElement);
      } else{
        isDelete = true;
        dartEditListElement.appendChild(liElementDartItem);      
      }

      addButtonElement.disabled = true;      

      playerNameElement.value = '';
      scorePlayerElement.value = '';
      roundPlayerElement.value = '';            

      buttonEdint.addEventListener('click', () => {  
        dartEditListElement.innerHTML = '';         
        addButtonElement.disabled = false;            
        
        playerNameElement.value = namePrElement.textContent; 
        scorePlayerElement.value = scorePrElement.textContent;
        roundPlayerElement.value = roundPrElement.textContent;  
        }
     ); 
     
     buttonOk.addEventListener('click', () => {
      addButtonElement.disabled = false; 
      buttonOk.remove();
      buttonEdint.remove();     
      scoreBordeElememt.appendChild(liElementDartItem);
      
      clearButtonElement.addEventListener('click', () => {
        scoreBordeElememt.innerHTML = '';
      })
     })
  });      
}
  