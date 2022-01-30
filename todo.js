const triggerEl = document.getElementById("btn");
const taskTitleEl = document.getElementById("newTaskTitle");
const listEl = document.getElementById("tasks");

triggerEl.addEventListener("click", () => {
    console.log("hello world");
    let title = taskTitleEl.value;
    console.log(title);
    addToList(title);
} );

function addToList(boz) {
    let myP = document.createElement("p");
    myP.innerHTML = boz;
    listEl.append(myP);
}