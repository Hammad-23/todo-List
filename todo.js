function addItem(){
var inputElement= document.getElementById("inp")
var listItem = document.createElement("LI")
var btn= document.createElement("BUTTON")
btn.setAttribute("class","btn btn-secondary")

 btn.innerHTML= "delete"
 var edit = document.createElement("BUTTON")
 edit.setAttribute("class","btn btn-success")
 
 edit.innerHTML = "edit"
 listItem.innerHTML ="<span>"+ inputElement.value + "</span>"
 listItem.appendChild(btn)
 listItem.appendChild(edit)
 btn.setAttribute("onClick","deleteItem(event)")
 edit.setAttribute("onClick","editItem(event)")




var unOrder = document.getElementById("lis")
// listItem.appendChild(btnName)


unOrder.appendChild(listItem)



 inputElement.value = ""

}


function deleteItem(event) {

var listItem= event.target.parentElement 

listItem.remove()


}




function editItem(event) {
    var currentItem = document.getElementById("current-edit")
    if(currentItem){
        currentItem.removeAttribute("id")
    }


var list = event.target.parentElement.children[0]
document.getElementById("inp").value = list.innerHTML
list.setAttribute("id","current-edit")
var inputArea = document.getElementById("input-Area")
// var updateBtn = document.createElement("BUTTON")
// updateBtn.innerHTML= "Update"
// updateBtn.setAttribute("onClick","updateItem()")
// inputArea.appendChild(updateBtn)
var button = inputArea.children[1]
button.innerHTML = "Update"
// inputArea.children[1].setAttribute("disabled","True")
button.setAttribute("onClick","updateItem()")



// console.log(list)

}


function updateItem(spanElement) {
var inpValue = document.getElementById("inp")
var currentItem = document.getElementById("current-edit")
currentItem.innerHTML = inpValue.value
currentItem.removeAttribute("id")
inpValue.value = ""

var inputArea = document.getElementById("input-Area")

var button = inputArea.children[1]
button.innerHTML = "Add"

button.setAttribute("onClick","addItem()")

}


