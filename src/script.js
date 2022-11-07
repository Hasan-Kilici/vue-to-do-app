document.addEventListener("click", (e)=>{
 let element = e.srcElement;
 let func = element.getAttribute("hasankilici");
 eval(func);
});

let taskCount = 0;

async function addTask(){
  let task = document.getElementById("task");
  let taskBox = document.getElementById("tasks");
  taskBox.innerHTML += `
  <div class="hsn" id="Task${taskCount}">
  ${task.value}
  <button hasankilici="finishTask('Task${taskCount}')">Bitir</button>
  <button hasankilici="deleteTask('Task${taskCount}')">Sil</button>
  </div>`;
  task.value = '';
  taskCount++
}

async function finishTask(id){
  let element = document.getElementById(id);
  element.style.color = "gray";
}

async function deleteTask(id){
  let element = document.getElementById(id);
  element.style.display = "none";  
  taskCount--
}
