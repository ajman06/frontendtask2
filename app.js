function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        // Create task item
        const taskItem = document.createElement("li");

        // Add task text
        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);

        // Create edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");
        editButton.onclick = () => editTask(taskContent, taskItem);
        taskItem.appendChild(editButton);

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(taskItem);
        taskItem.appendChild(deleteButton);

        // Append task item to the task list
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = "";
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}

function editTask(taskContent, taskItem) {
    const newTask = prompt("Edit your task:", taskContent.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        taskContent.textContent = newTask.trim();
    }
}
