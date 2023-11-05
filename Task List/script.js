const inputBox = document.getElementById("input");
const tasks = document.getElementById("tasks");
const deleteAll = document.querySelector(".delete-button");

function addNewTask(task){
  if (task.keyCode === 13){
    if(input.value === ''){
        alert("Cannot add an empty task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        let span = document.createElement("span");
        //adding delete element
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveTasks();
  }
}
input.addEventListener("keyup", addNewTask);

tasks.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

deleteAll.addEventListener("click", function(){
  while(tasks.firstChild) {
    tasks.removeChild(tasks.firstChild);
    saveTasks();
  }
})

function saveTasks(){
    localStorage.setItem("data", tasks.innerHTML);
}
function showTasks(){
    tasks.innerHTML = localStorage.getItem("data");
}
showTasks();