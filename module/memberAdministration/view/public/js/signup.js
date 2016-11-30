$( document ).ready(function() {
    $('.login-button').click(function() {
      // when user click login button
      // get user's input
      var name = $("input[name='name']");
      var email = $("input[name='email']").val();
      var password = $("input[name='password']").val();
      var data = {
          name: name,
          email: email,
          password: password
      }
      $.ajax({
        type: "POST",
        url: "http://localhost:8000/api/user",
        data: JSON.stringify(data),
        success: onSuccess,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      });

      function onSuccess(data, status, jqXHR){
        console.log(data);
      }
    });
});
