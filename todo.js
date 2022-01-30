const triggerEl = document.getElementById("btn");
const taskTitleEl = document.getElementById("newTaskTitle");
const listEl = document.getElementById("tasks");

triggerEl.addEventListener("click", () => {
    let title = taskTitleEl.value;

    if(title == ""){

    } else {
        addToList(title);
        taskTitleEl.value = "";
    }
} );

function addToList(amqezi) {
    let myDiv = document.createElement("div");
    let myP = document.createElement("p");
    let myImg = document.createElement("img");
    myImg.addEventListener("click" , () => {
        myDiv.classList.add("deleted");
    })
    myImg.src = "assets/delete.png";
    myDiv.classList.add("writedtasks");
    myP.innerHTML = amqezi;
    myDiv.append(myP);
    myDiv.append(myImg);
    listEl.append(myDiv);
}