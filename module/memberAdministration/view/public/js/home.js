$(document).ready(function() {
  var host = location.protocol + "//" + window.location.hostname + (location.port ? ':'+location.port: '');

  // prepare data
  var data = {
    token: localStorage.getItem("token"),
  }
  // check if user has logged in
  $.ajax({
    type: "POST",
    url: host + '/login',
    data: data,
    contentType: "application/x-www-form-urlencoded",
    dataType: "json",
  }).done(updateUI);

  function updateUI(data, status, jqXHR) {
    if (data.status) {
      // if logged in
      // set the link of header to dash board
      $('#location-button').html("Dash board");
      $('#location-button').click(function() {
        window.location.href = host + '/dashboard';
      });
      // show logout button
      $('#logout-button').css({display: 'block' });
      $('#logout-button').click(destroyLocalStorage);
    } else {
      // if not logged in
      // set the link to log in page
      $('#location-button').html("Login");
      $('#location-button').click(function() {
        window.location.href = host + '/login';
      });
    }
  }

  function destroyLocalStorage() {
    // delete all local storage data
    localStorage.clear();
    location.reload();
  }
});
