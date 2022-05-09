let emForm = document.getElementById("emForm")
let myField= document.getElementById("myField")
let myList= document.getElementById("myList")
emForm.addEventListener("submit", (e)=> {
 e.preventDefault()
  appendItem(myField.value)
} )

function appendItem (x) {
  let myHTML=`<li> ${x} <button onclick= "deleteItem(this)">Delete</button></li>`
  myList.insertAdjacentHTML("beforeend", myHTML)
  myField.value=""
  myField.focus
}

function deleteItem(deletedItem){
  deletedItem.parentElement.remove()
  
}