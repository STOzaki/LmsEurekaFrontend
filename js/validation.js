function validation() {
  console.log("Validating the inputs");
  var listOfInputElements, listLength, i, errorHtml, valid;
  valid = true;
  listOfInputElements = document.getElementsByTagName("input");
  listLength = listOfInputElements.length;
  for(i = 0; i < listLength; i++) {
    let publisher = listOfInputElements[i];
    if(publisher.checkValidity()) {
      console.log('You are good for ' + publisher.name);
      valid = valid && true;
      // reverse the effect of the error message
      errorHtml = document.getElementById(publisher.id + "Error");
      errorHtml.parentElement.style.display = "none";
      errorHtml.innerHTML = "";
    } else {
      valid = valid && false;
      errorHtml = document.getElementById(publisher.id + "Error");
      errorHtml.parentElement.style.display = "flex";
      errorHtml.innerHTML = publisher.validationMessage;
    }
  }
  return valid;
}