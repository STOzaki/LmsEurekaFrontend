// create a user with the information below. If exists, then override that one
// WARNING: this is not neccessary everytime the pages gets loaded
var users = [{
  username: 'test',
  password: 's'
}];
window.localStorage.setItem('users', JSON.stringify(users));
// window.localStorage.clear();

function validateLogin() {
  var usernameHtml, passwordHtml, username, password, errorHtml;
  usernameHtml = document.getElementById("username");
  passwordHtml = document.getElementById("password");
  username = usernameHtml.value;
  password = passwordHtml.value;

  errorHtml = document.getElementById("error");

  const users = JSON.parse(window.localStorage.getItem('users'));

  // check credentials
  if(users != null) {
    const arrayLength = users.length;
    let i;
    let successful = false;
    for(user of users) {
      console.log(user);
      if(user.username == username && user.password == password) {
        window.localStorage.setItem('currentUser', JSON.stringify({
          username: username
        }));
        return true;
      } else {
        errorHtml.parentElement.style.display = "flex";
        errorHtml.innerHTML = "Either your password or username is incorrect";
      }
    }
  } else {
    console.log("we do not have any users!!");
    errorHtml.parentElement.style.display = "flex";
    errorHtml.innerHTML = "we had a problem with our \"server\"";
  }

  return false;
}