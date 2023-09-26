document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    // Add task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
    }

    // Remove a task from the list
    function deleteTask(event) {
        if (event.target.classList.contains('delete-button')) {
            const listItem = event.target.parentElement;
            taskList.removeChild(listItem);
        }
    }

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);
});
