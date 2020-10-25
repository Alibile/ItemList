var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')
// Form submit event
form.addEventListener('submit',additem);
// Add item
itemList.addEventListener('click',removeItem);
// Filter event
filter.addEventListener('keyup',filterItems);
//add item
function additem(e) {
 e.preventDefault();

 // Get input value
var newitem = document.getElementById('item').value;
//create new li element
var li = document.createElement('li')
li.className = 'list-group-item';
//add text node with input value
li.appendChild(document.createTextNode(newitem));
//create del button element
var delbtn = document.createElement('button')
// add classes button del button
delbtn.className ="btn btn-danger btn-sm float-right delete";
delbtn.innerHTML ="delete";
//delbtn.appendChild(document.createTextNode('delete'));
// append button to  il
li.appendChild(delbtn)
// append il to list
itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')){
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
            
        }
    } 
      
}

// filter Items
function filterItems(e) {
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get list
   var items =  itemList.getElementsByTagName('li');
   // convert to an array
   Array.from(items).forEach(function(item) {
       var itemName = item.firstChild.textContent;
       if (itemName.toLowerCase().indexOf(text) != -1) {
           item.style.display = 'block';
       } else {
           item.style.display ='none';
       }
   });
}