$(document).ready(function() {
  // load the data in editPublisher
  let publisher = JSON.parse(window.localStorage.getItem('editPublisher'));
  $('#name').val(publisher.name);
  $('#address').val(publisher.address);
  $('#phone').val(publisher.phone);
});

function editPublisher() {
  if(validation()) {
    try {
      // try to see if this works
      let stringId = JSON.parse(window.localStorage.getItem('editPublisher'))
        .id;
      let publisherId = parseInt(stringId, 10);
      let name = $("#name").val();
      let address = $("#address").val();
      let phone = $("#phone").val();

      // update Publisher
      let publishers = JSON.parse(window.localStorage.getItem('publishers'));
      for(publisher of publishers) {
        if(publisher.id === publisherId) {
          /* This was to practice truthy,
            I would normally remove these if statements since the forms auto
            fill with the current information associated with that
            publisher
          */
          if(name) {
            publisher.name = name;
          }
          if(address) {
            publisher.address = address;
          }
          if(phone) {
            publisher.phone = phone;
          }
        }
      }
      // save updated publishers
      window.localStorage.setItem('publishers', JSON.stringify(publishers));

      // now return the the publisher table page
      window.location.href = "adminPublishers.html";
    } catch(err) {
      alert("sorry something went wrong with our system");
    }
  }
}