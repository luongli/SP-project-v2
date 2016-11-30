$(document).ready(function() {
    var token = localStorage.getItem("token");
    var currentId = -1;
    if(token === null) {
        // if user have not logged
        // display error and return
        onError();
        return;
    }
    // get user list
    $.ajax({
      type: "GET",
      headers: { 'token': token },
      url: host + '/api/users',
      dataType: "json",
      error: onError,
  }).done(printUserList);

  // print the list of users
  function printUserList(data, status, jqXHR) {
      if(data !== null && data.status) {
          // if get user list Successfully
          // get html string
          // because of deadline so we didn't enough time to sanitise our input,
          // therefore, XSS vunerability will happen here
          // be careful if you use this code
          // sorry :((
          var box = $('.dashboard-box');
          data.users.forEach(function(item, index) {
             // for each user
             var html = getUserHtml(item);
             box.append(html);
          });
      }
  }

  // get html of each row representing information of each user
  function getUserHtml(item) {
      var name = typeof(item.name) !== 'undefined' ? item.name : '';
      var email = typeof(item.email) !== 'undefined' ? item.email : '';
      var admin = typeof(item.admin) !== 'undefined' ? item.admin : '';
      var id = typeof(item._id) !== 'undefined' ? item._id : '';

      var html = '<div class="row no-margin row-data" id=row-id-' + id +'><div class="col-xs-3">' + name
        + '</div><div class="col-xs-4">' + email
        + '</div><div class="col-xs-1">' + admin
        + '</div><div class="col-xs-4 function-button-holder"><button class="edit-button" data-id=' + id
        + '><span class="glyphicon glyphicon-pencil"></span>Edit</button><button class="delete-button" data-id=' + id
        + '><span class="glyphicon glyphicon-trash"></span>Remove</button></div></div>';
      return html;
  }

  // error function when user list cannot be fetched
  function onError() {
    var box = $('.dashboard-box');
    box.append('<div class="row no-margin row-data error-row">You dont have permission to view this page</div>');
  }

  $(document).on("click", ".delete-button", function() {
    // get user id
    id = $(this).data("id");
    // show modal delete
    $('#deleteModal').modal('show');
  });

  $(document).on("click", "#ok-button", function() {
    // user confirms deleting
    // validate id
    if(id == -1) {
      return;
    }
    // send delete request
    $.ajax({
      type: "DELETE",
      headers: { 'token': token },
      url: host + '/api/user/'+id,
      dataType: "json"
    }).done(deleteUserSuccess);

    function deleteUserSuccess() {
      // when user is deleted Successfully
      $('#row-id-' + id).css({display: 'none'});
    }
  });
});
