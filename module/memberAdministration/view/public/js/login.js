$( document ).ready(function() {
    $('.login-button').click(function() {
      // when user click login button
      // get user's input
      var email = $("input[name='email']").val();
      var password = $("input[name='password']").val();
      var data = {

      }
      $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: success,
        dataType: dataType
      });
    });
});
