function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  var listItem = document.createElement("li");
  listItem.innerHTML = taskInput.value + ' <button class="delete-btn" onclick="removeTask(this)">Delete</button>';
  taskList.appendChild(listItem);
  taskInput.value = "";
}

function removeTask(item) {
  var taskList = document.getElementById("taskList");
  var listItem = item.parentNode;
  taskList.removeChild(listItem);
}
