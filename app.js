function todo(){
    const user=document.getElementById("user");
    const list=document.getElementById("list");

    list.innerHTML += `<li> ${user.value} <button onclick="del(event)">Delete</button>
        <button onclick="edit(event)">Edit</button> </li>`;
    user.value ="";
}

function del(event){
    event.target.parentNode.remove()
}

// function edit(event){
//       event.textcontent.trim()
// }


function edit(event) {
    const listItem = event.target.parentNode;
    const taskText = listItem.firstChild.textContent.trim(); // Get the task text
    const newText = prompt("Edit task:", taskText); // Prompt the user for new text

    if (newText !== null && newText !== "") {
        listItem.firstChild.textContent = newText; // Update the task text
    }
}

function addTodo(event){
    if(event.keyCode === 13){

        todo()
    }
}

