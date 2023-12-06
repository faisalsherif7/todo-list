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
    const addTaskButton = document.querySelector('.add-project-button');
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
        newProject.className = 'project sidebar-item';
        newProject.setAttribute('data-project-id', `${project.id}`)
        newProject.innerHTML = `
            <p class="project-title">${project.title}</p>  
            <p class="delete-project-button">
            <svg class="delete-project-svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"/></svg>
            </p>
        `;
        sidebar.appendChild(newProject);
    }
    defaultSelectedProject();
}

export const displayProjectOptions = function() {
    const selectProject = document.querySelector('#select-project');
    const currentProject = document.querySelector('.selected-project');
    selectProject.innerHTML = '';
    for (const key in crud.allProjects) {
        const project = crud.allProjects[key];
        if (currentProject.dataset.projectId === key) {
            selectProject.innerHTML += `
                <option value="${project.id}" selected>${project.title}</option>
            `;
        } else {
            selectProject.innerHTML += `
                <option value="${project.id}">${project.title}</option>
            `;
        }
    }

};

export const switchProjects = function() {
    const sidebar = document.querySelector('.sidebar-projects');
    sidebar.addEventListener('click', (event) => {

        let clicked = 0;
        let clickedProject;

        if (event.target.classList.contains('project')) {
            clickedProject = event.target;
            clicked = 1;
        }
        if (event.target.classList.contains('project-title')) {
            clickedProject = event.target.parentElement;
            clicked = 1;
        }
        if (clicked === 1) {
            removeSelectedClass();
            addSelectedClass(clickedProject);
            const projectId = clickedProject.dataset.projectId;
            const tasks = crud.getTasksInProject(projectId);
            displayTasks(tasks);
        }
    })
}();

export const displayTasks = function(tasksObject) {
    const content = document.querySelector('.tasks-content');
    content.innerHTML = '';
    for (const key in tasksObject) {
        const task = tasksObject[key];
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
            const id = event.target.parentElement.dataset.projectId;
            crud.deleteProject(id);
        }
    })
}();

function removeSelectedClass() {
    const currentSelection = document.querySelector('.selected-project');
    currentSelection.classList.remove('selected-project')
};

export function addSelectedClass(projectElement) {
    projectElement.classList.add('selected-project');
    displayProjectOptions();
};

export const defaultSelectedProject = function() {
    const currentSelection = document.querySelector('.selected-project');
    if (currentSelection === null) {
        const inbox = document.querySelector('.project');
        inbox.classList.add('selected-project');
        displayProjectOptions();
    }
};

export { addTask, addProject, taskDialog, projectDialog, displayProjects };