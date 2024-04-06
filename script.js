

document.getElementById('add').addEventListener('click', function() {
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    
    if (taskTitle && taskDescription) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        
        taskItem.innerHTML = `<p><strong>Title: </strong> ${taskTitle} <br> <strong>Description: </strong> ${taskDescription}</p>`;
        
        const deleteBtn = document.createElement('i');
        deleteBtn.classList.add('fa-solid', 'fa-trash-can', 'delete-btn');
        taskItem.appendChild(deleteBtn);
        
        document.getElementById('tasks').appendChild(taskItem);

        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';

        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
        });
    } 
    else {
        alert('Please Fill in both the Title and Description');
    }
});
