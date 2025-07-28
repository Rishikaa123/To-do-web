document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const dateInput = document.getElementById('todo-date');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        addTodo(input.value, dateInput.value);
        input.value = '';
        dateInput.value = '';
    });

    function addTodo(todoText, dueDate) {
        const li = document.createElement('li');

        // Task Text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = todoText;
        li.appendChild(taskSpan);

        // Due Date (if provided)
        if (dueDate) {
            const dateSpan = document.createElement('span');
            dateSpan.className = 'due-date';
            dateSpan.textContent = ' ⏰ ' + dueDate;
            li.appendChild(dateSpan);
        }

        // Toggle completed
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✕';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
});
