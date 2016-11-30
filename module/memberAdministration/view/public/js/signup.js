$( document ).ready(function() {
    $('.login-button').click(function() {
      // when user click login button
      // get user's input
      var name = $("input[name='name']").val();
      var email = $("input[name='email']").val();
      var password = $("input[name='password']").val();
      var data = {
          name: name,
          email: email,
          password: password
      };
      $.ajax({
        type: "POST",
        url: "http://localhost:8000/api/user",
        data: data,
        success: onSuccess,
        contentType: "application/x-www-form-urlencoded",
        dataType: "json",
      });

      function onSuccess(data, status, jqXHR){
        console.log(data);
      }
    });
});
