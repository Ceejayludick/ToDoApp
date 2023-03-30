

// code to save data to Local Storage 
let input = document.getElementById('saveServer').value;
localStorage.setItem('server', input);

letObj = JSON.parse(JSONData);
console.log(obj.myUL);

// code to make a delete/close button for every list item
const myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// code to press close/delete on list item
const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// code to change colour of 'completed' list item
const li = document.getElementById('myUL');

li.addEventListener('click', function onclick() {
  li.style.backgroundColor = 'salmon';
  li.style.color = 'white'
});


// js code to add to list when user types in 'type here'
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!"); // code for errors
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}




