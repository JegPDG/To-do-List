const listObj = JSON.parse(localStorage.getItem('list')) || [];

displayList();
//function to get the input

function getInput(){
  let input = document.getElementById('js-input-lst');
  if (input.value != ''){
    listObj.push({text: input.value});
    localStorage.setItem('list', JSON.stringify(listObj));
    input.value = '';
  }
    displayList()
}

//function to display the list/ array

function displayList(){
  let listCont = document.querySelector('.list-cont');
  
 let listHtml = listObj.map(data => `
   <div class="do-item"> 
        <p>${data.text}</p>
        <button class="js-del-but"><img src="pictures/minus.png" class="del-img"></button>
      </div>
  `).join('');

  listCont.innerHTML = listHtml;

  document.querySelectorAll('.js-del-but')
  .forEach((object, index) => {
      object.addEventListener('click', () => {
        listObj.splice(index, 1);
        localStorage.setItem('list', JSON.stringify(listObj));
        displayList();
      })
  });
}

let inputJS = document.querySelector('.js-input');
inputJS.addEventListener('keydown', (eventENT) => {
  if(eventENT.key === 'Enter'){
    getInput();
  }

})