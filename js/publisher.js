// let publishers = [
//   {id: 0, name:"Donaldson", address:"Fake PubAddr0", phone:"555-555-5550"},
//   {id: 1, name:"McGelon", address:"Fake PubAddr1", phone:"555-555-5551"},
//   {id: 2, name:"Penguin", address:"PubAddr0", phone:"555-555-5552"}
// ];

// window.localStorage.setItem('publishers', JSON.stringify(publishers));

function tableEntry(publisher) {
  return "<tr><th scope=\"row\">" + publisher.id + "</th><td>" +
    publisher.name + "</td><td>" + publisher.address + "</td><td>" +
    publisher.phone + "</td><td class=\"table_buttons\">" +
    "<a class=\"edit\" onclick=\"editPublisher(this)\"" +
    "href=\"./adminPublishersEdit.html\"" +
    "title=\"Edit Publisher\" data-toggle=\"tooltip\">" +
    "<i class=\"material-icons\">edit</i></a><a class=\"delete\"" +
    "onclick=\"deletePublisher(this)\" title=\"Delete Publisher\"" +
    "data-toggle=\"tooltip\"><i class=\"material-icons\">delete</i></a></td>" +
    "</tr>";
}

function loadData() {
  let listOfpublishers = JSON.parse(window.localStorage.getItem('publishers'));
  let tableHTML = "";
  if(listOfpublishers != null) {
    for(publisher of listOfpublishers) {
      tableHTML += tableEntry(publisher);
    }
    $("#tableBody").html(tableHTML);
  }
}

function editPublisher(currentObj) {
  console.log("Setting editPublisher to " +
  currentObj.parentElement.parentElement.children[0].innerHTML);

  // grabs the id of the current tr this is in
  let currentId = currentObj.parentElement.parentElement.children[0].innerHTML;
  window.localStorage.setItem('editPublisher', JSON.stringify({
    id: currentId
  }));
}

function deletePublisher(currentObj) {
  console.log("Deleting this Publisher to " +
  currentObj.parentElement.parentElement.children[0].innerHTML);

  // grabs the id of the current tr this is in
  let currentId = currentObj.parentElement.parentElement.children[0].innerHTML;

  // convert currentId to int
  try {
    // try to see if this works
    let id = parseInt(currentId, 10);
    // gets the list of publishers
    let listOfpublishers = JSON.parse(
      window.localStorage.getItem('publishers'));

    let i;
    let arrayLength = listOfpublishers.length;
    let publisherIndex = -1;
    // find the location of the requested publisher
    for(i = 0; i < arrayLength; i++) {
      let publisher = listOfpublishers[i];
      // console.log(publisher);
      if(publisher.id === id) {
        console.log("found it!");
        publisherIndex = i;
      }
    }
    listOfpublishers.splice(publisherIndex, 1);
    window.localStorage.setItem('publishers', JSON.stringify(listOfpublishers));

    // now refresh the page to show the difference
    window.location.reload();
  } catch(err) {
    alert("sorry something went wrong with our system");
  }
}


$(document).ready(function() {
  console.log("document is ready");
  loadData();
  // if (typeof(Storage) !== "undefined") {
  //   console.log('This browser DOES support Local Storage');
  // } else {
  //   console.log('This browser does NOT support Local Storage');
  // }
});