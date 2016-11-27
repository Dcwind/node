$(function () {
    // GET/Read
    $('#addItem').on('click',function(){
      $.ajax({
        url: '/tasks',
        contentType: 'application/json',
        success: function(response) {
          console.log(response);
        }

      });
    });

});
