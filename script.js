document.getElementById('add').addEventListener('click', function() {
    var taskValue = document.getElementById('task').value;
    if (taskValue.trim() !== "")
    {
        var taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        
        
        var taskText = document.createElement('span');
        taskText.textContent = taskValue;
        taskItem.appendChild(taskText);
        
        var deleteBtn = document.createElement('i');
        deleteBtn.classList.add('fa-solid', 'fa-trash', 'delete-btn');
        taskItem.appendChild(deleteBtn);
        
        document.getElementById('taskList').appendChild(taskItem);
        
        document.getElementById('task').value = "";
        
        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
        });
    }
});
