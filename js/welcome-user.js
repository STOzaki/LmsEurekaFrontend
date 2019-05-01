$(document).ready(function() {
  let currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
  if(currentUser != null) {
    console.log(currentUser.username);
    $("#welcome").html("Welcome " + currentUser.username);
  }
});