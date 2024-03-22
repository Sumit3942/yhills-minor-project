const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit');
        editBtn.onclick = () => editTask(li);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.onclick = () => deleteTask(li);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a valid task!');
    }
}

function editTask(taskElement) {
    const newTaskText = prompt('Edit task:', taskElement.textContent.trim());
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskElement.textContent = newTaskText.trim();
    }
}

function deleteTask(taskElement) {
    if (confirm('Are you sure you want to delete this task?')) {
        taskElement.remove();
    }
}
