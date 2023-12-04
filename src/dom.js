import * as crud from "./crud";

// Accept form input and create new task
const addTask = function() {
    document.querySelector('.submit-task-form').addEventListener('click', function (event) {
        event.preventDefault();
        
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const dueDate = document.querySelector('#due-date').value;
        const priority = document.querySelector('#priority').value;
        const project = document.querySelector('#select-project').value;
        
        crud.createTask(title, project, description, dueDate, priority);
        displayTasks(crud.allProjects[project].tasks);
    })
}();

const addProject = function() {
    document.querySelector('.submit-project-form').addEventListener('click', function (event) {
        event.preventDefault();
        const title = document.querySelector('#project-title').value;
        crud.createProject(title);
    })
}();


// Dialog functionality
const taskDialog = function() {
    const addTaskButton = document.querySelector('.add-task-button');
    const closeDialogButton = document.querySelector('.close-task-dialog')
    const dialog = document.querySelector('.add-task-dialog');
    addTaskButton.addEventListener("click", () => {
        dialog.showModal();
    });
    closeDialogButton.addEventListener("click", () => {
        dialog.close();
    })
}();

const projectDialog = function() {
    const addTaskButton = document.querySelector('.add-project');
    const closeDialogButton = document.querySelector('.close-project-dialog')
    const dialog = document.querySelector('.add-project-dialog');
    addTaskButton.addEventListener("click", () => {
        dialog.showModal();
    });
    closeDialogButton.addEventListener("click", () => {
        dialog.close();
    })
}();


function displayProjects() {
    const sidebar = document.querySelector('.sidebar-projects');
    sidebar.innerHTML = '';
    for (const key in crud.allProjects) {
        const project = crud.allProjects[key];
        const newProject = document.createElement('div');
        newProject.className = 'sidebar-item';
        newProject.innerHTML = `
            <p class="project" data-project-name="${project.title}">${project.title}  <button class="delete-project-button" data-project-id="${project.id}">del</button></p>
        `;
        sidebar.appendChild(newProject);
    }
}

const selectProjectFromList = function() {
    const selectProject = document.querySelector('#select-project');
    selectProject.innerHTML = '';
    for (const key in crud.allProjects) {
        const project = crud.allProjects[key];
        selectProject.innerHTML += `
            <option value="${project.title}">${project.title}</option>
        `;
    }
};

export const switchProjects = function() {
    const sidebar = document.querySelector('.sidebar-projects');
    sidebar.addEventListener('click', (event) => {
        if (event.target.className === 'project') {
            let clickedProject = event.target;
            const projectName = clickedProject.dataset.projectName;
            const tasks = crud.getTasksInProject(projectName);
            displayTasks(tasks);
        }
    })
}();

export const displayTasks = function(tasksObject) {
    const content = document.querySelector('.tasks-content');
    content.innerHTML = '';
    for (const key in tasksObject) {
        const task = tasksObject[key];
        console.log(task);
        content.innerHTML += `
            <div class="task-item">
                <p class="task-title">Task name - ${task.title}</p>
                <p class="task-description">Description - ${task.description}</p>
                <p class="task-priority">Priority - ${task.priority}</p>
                <p class="task-due-date">Due date - ${task.dueDate}</p>
                <p>Id - ${task.id}</p>
                <button type="button" class="delete-task-button" data-task-id="${task.id}">Del</button>
            </div>
        `;
    }
};

export const deleteTastEvent = function() {
    const content = document.querySelector('.tasks-content');
    content.addEventListener('click', (event) => {
        if (event.target.className === 'delete-task-button') {
            const clickedDeleteButton = event.target;
            const id = clickedDeleteButton.dataset.taskId;
            crud.deleteTask(id);
        }
    })
}();

export const deleteProjectEvent = function() {
    const content = document.querySelector('.sidebar-projects');
    content.addEventListener('click', (event) => {
        if (event.target.className === 'delete-project-button') {
            const id = event.target.dataset.projectId;
            crud.deleteProject(id);
        }
    })
}();

export { addTask, addProject, taskDialog, projectDialog, displayProjects, selectProjectFromList };