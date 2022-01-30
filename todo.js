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

function addToList(boz) {
    let myDiv = document.createElement("div");
    let myP = document.createElement("p");
    let myImg = document.createElement("img");
    myImg.src = "assets/delete.png";
    myP.innerHTML = boz;
    myDiv.append(myP);
    myDiv.append(myImg);
    myDiv.classList.add("writedtasks");
    listEl.append(myDiv);
}