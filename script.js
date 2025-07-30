function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskTime = document.getElementById("taskTime");
    const taskList = document.getElementById("taskList");
  
    const taskName = taskInput.value.trim();
    const taskDateTime = taskTime.value;
  
    if (taskName === "") {
      alert("Please enter task name");
      return;
    }
  
    const li = document.createElement("li");
    li.className = "task-item";
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed");
    });
  
    const taskInfo = document.createElement("div");
    taskInfo.className = "task-info";
    taskInfo.innerHTML = `<strong>${taskName}</strong><br/><small>${taskDateTime}</small>`;
  
    const actionButtons = document.createElement("div");
    actionButtons.className = "task-actions";
  
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.onclick = () => editTask(li, taskName, taskDateTime);
  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = () => taskList.removeChild(li);
  
    actionButtons.appendChild(editBtn);
    actionButtons.appendChild(deleteBtn);
  
    li.appendChild(checkbox);
    li.appendChild(taskInfo);
    li.appendChild(actionButtons);
    taskList.appendChild(li);
  
    // Clear input fields after task is added
    taskInput.value = "";
    taskTime.value = "";
  }
  
  function editTask(taskElement, oldName, oldDateTime) {
    const newName = prompt("Edit task name:", oldName);
    const newDate = prompt("Edit date & time:", oldDateTime);
  
    if (newName && newDate) {
      const taskInfo = taskElement.querySelector(".task-info");
      taskInfo.innerHTML = `<strong>${newName}</strong><br/><small>${newDate}</small>`;
    }
  }
  