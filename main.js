var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();
  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // add class
  li.className = 'list-group-item';
  // add text node with inout value
  li.appendChild(document.createTextNode(newItem));

  //Create delete button element
  var deleteBtn = document.createElement('button');

  //Add classes to delte button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // apend  text node
  deleteBtn.appendChild(document.createTextNode('x'));
  // append button to li
  li.appendChild(deleteBtn);
  // append button to list
  itemList.appendChild(li);
}

// Remove Item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you Sure')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // Convert text to lowercase
  var text = e.target.value.toLowerCase();
  // get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}






