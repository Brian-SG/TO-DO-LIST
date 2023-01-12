function addItem(){
    var listElement = document.getElementById('list');
    var textItem = document.getElementById('newItem').value;
    console.log(textItem)

    var liElement = document.createElement('li');
    liElement.innerText = textItem;
    liElement.classList.add('new');
    listElement.appendChild(liElement);
    
    var list = document.getElementById('list');
    list.addEventListener('click', function(e) {
      if(e.target.tagName === "LI") {
        e.target.classList.toggle('done');
      }
    });


}




   