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

});
// using ajax
