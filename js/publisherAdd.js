function Publisher(id, name, address, phone) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
}
  
function publisherAddValidation() {
  // validation() from validation.js
  if(validation()) {
    // get publisher from the localStorage
    let publishers = JSON.parse(window.localStorage.getItem('publishers'));

    // get values from the publisher form
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let id;
    console.log(publishers != null);
    if(publishers != null) {
      if(publishers.length == 0) {
        // if there are no saved elements in the localStorage, have id be 0
        id = 0;
      } else {
        // create id by incrementing the last element in the array by 1
        id = publishers[publishers.length - 1].id + 1;
      }
      console.log("Id: " + id);
      // create new Publisher
      let newPublisher = new Publisher(id, name, address, phone);

      //save into publishers
      publishers.push(newPublisher);

      // save this new array into the localStorage
      window.localStorage.setItem('publishers', JSON.stringify(publishers));
    } else {
      // make a new publishers array to store
      id = 0;
      let newPublisher = new Publisher(id, name, address, phone);
      let newPublishers = [newPublisher];
      window.localStorage.setItem('publishers', JSON.stringify(newPublishers));
    }
    // now return the the publisher table page
    window.location.href = "adminPublishers.html";
  }
}