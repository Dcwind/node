$(function () {
    // GET/Read
    $('#addItem').on('click',() => {
      $.ajax({
        url: '/tasks',
        contentType: 'application/json',
        success: function(response) {
          const value = $('#item').value;

          if(value){
            addItemTodo(value);
            $('#item').value = "";
          }

        }

      });
    });

    // Add task function
    function addItemTodo (text) {
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;

  // Add click event for removing item
  remove.addEventListener('click', removeItem);

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;

  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);



}


});
// using ajax
