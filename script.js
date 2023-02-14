//1. Create task elements
    //a. Create li
    //b. Create delete button
    //c. Create strikethrough when click
let input = document.getElementById("userInput");
let addBtn = document.getElementById("submitButton");
let ul = document.querySelector("ul"); //Try use getElementById
let item = document.getElementsByTagName("li"); //Same as above

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

//Create the task list
function createList() {
    let li = document.createElement("li"); //creates element li
    li.appendChild(document.createTextNode(input.value)); //make text from input field
    ul.appendChild(li); //add li to ul
    input.value = "";

    //Add Strikethrough function
    //Start
    function completeTask() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", completeTask);
    //End

    //Delete Task function
    //Start
    let deleteBtn = document.createElement("button"); //Add Delete button
    deleteBtn.appendChild(document.createTextNode("X")); //Add X mark
    li.appendChild(deleteBtn); //Append to li
    deleteBtn.addEventListener("click", deleteTask); //Add function to Delete button

    function deleteTask() {
        li.classList.toggle("delete");
    }
    //End
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createList();
    }
}

addBtn.addEventListener('click', addListAfterClick);