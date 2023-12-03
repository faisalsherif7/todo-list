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
    const addTaskButton = document.querySelector('.add-task');
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


function populateSidebar() {
    const sidebar = document.querySelector('.sidebar-projects');
    sidebar.innerHTML = '';
    for (const project in crud.allProjects) {
        const newProject = document.createElement('div');
        newProject.className = 'sidebar-item';
        newProject.innerHTML = `
            <p class="project">${project}</p>
        `;
        sidebar.appendChild(newProject);
    }
}

function selectProjectFromList() {
    const selectProject = document.querySelector('#select-project');
    selectProject.innerHTML = '';
    for (const project in crud.allProjects) {
        selectProject.innerHTML += `
            <option value="${project}">${project}</option>
        `;
    }
};

export { addTask, addProject, taskDialog, projectDialog, populateSidebar, selectProjectFromList }