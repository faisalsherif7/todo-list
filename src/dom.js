import * as crud from "./crud";

// Accept form input and create new task
const addTask = function() {
    document.querySelector('.submit-task-form').addEventListener('click', function (event) {
        event.preventDefault();
        
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const dueDate = document.querySelector('#due-date').value;
        const priority = document.querySelector('#priority').value;
        const project = document.querySelector('#project-selector').value;
        
        crud.createTask(title, project, description, dueDate, priority);
        displayTasks(crud.allProjects[project].tasks);
    })
}();

const addProjectEvents = function() {
    document.querySelector('.sidebar').addEventListener('click', function (event) {
        if (event.target.className === 'submit-project-form') {
            const title = document.querySelector('#project-title').value;
            crud.createProject(title);
            displayAddProjectButton();
        }
        if (event.target.className === 'cancel-add-project-form') {
            displayAddProjectButton();
        }
        if (event.target.closest('.add-project-container')) {
            const trigger = event.target.closest('.add-project-container');
            trigger.innerHTML = `
            <div class="add-project-form">
                <div class="add-project-form-input">
                    <input type="text" name="project-title" id="project-title" placeholder="add project">
                </div>
                <div class="add-project-form-buttons">
                    <button type="button" class="submit-project-form">Submit</button>
                    <button type="button" class="cancel-add-project-form">Cancel</button>
                </div>
            </div>
            `
            trigger.classList.remove('add-project-container');
            trigger.classList.remove('sidebar-item');
            trigger.classList.add('add-project-form-container');
        }
    })
}();

function displayAddProjectButton() {
    const add = document.querySelector('.add-project-form-container');
    add.innerHTML = `<p class="add-project-button">+ Add Project</p>`;
    add.classList.remove('add-project-form-container');
    add.classList.add('add-project-container');
    add.classList.add('sidebar-item');
};


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
            <button class="delete-project-button">
                <svg class="delete-project-svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path  class="delete-project-svg-path" d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"/></svg>
            </button>
        `;
        sidebar.appendChild(newProject);
    }
    defaultSelectedProject();
}

export const addProjectSelector = function() {
    const selectProject = document.querySelector('#project-selector');
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

    const currentProjectElement = document.querySelector('.selected-project');
    const title = crud.allProjects[currentProjectElement.dataset.projectId].title;
    content.innerHTML = `
        <div class="content-title-div">
            <p class="content-title">${title}</p>
        </div>
    `

    for (const key in tasksObject) {
        const task = tasksObject[key];
        content.innerHTML += `
            <div class="task-item" data-task-id="${task.id}">
                <p class="task-title">${task.title}</p>
                <p class="task-due-date">${task.dueDate}</p>
                <p class="task-priority-${task.priority}">${task.priority}</p>
                <div class="action-buttons-container">
                    <div class="action-button edit-task-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                    </div>
                    <div class="action-button delete-task-button">    
                            <svg class="delete-task-svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path  class="delete-project-svg-path" d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"/></svg>
                    </div>
                </div>
            </div>
        `;
    }
};

export const deleteTaskEvent = function() {
    const content = document.querySelector('.tasks-content');
    content.addEventListener('click', (event) => {

        if (event.target.closest('.delete-task-button')) {
            const clickedTask = event.target.closest('[data-task-id]');
            const id = clickedTask.dataset.taskId;
            crud.deleteTask(id);
        }
    })
}();

export const deleteProjectEvent = function() {
    const content = document.querySelector('.sidebar-projects');
    content.addEventListener('click', (event) => {
        if (event.target.closest('.delete-project-button')) {
            const id = event.target.closest('[data-project-id]').dataset.projectId;
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
    addProjectSelector();
};

export const defaultSelectedProject = function() {
    const currentSelection = document.querySelector('.selected-project');
    if (currentSelection === null) {
        const inbox = document.querySelector('.project');
        inbox.classList.add('selected-project');
        addProjectSelector();
    }
};

export const editTaskEvent = function() {
    
    const content = document.querySelector('.tasks-content');
    content.addEventListener('click', (event) => {

        if (event.target.closest('.edit-task-button')) {
            const clickedTask = event.target.closest('[data-task-id]');
            const taskId = clickedTask.dataset.taskId;
            const projectId = document.querySelector('.selected-project').dataset.projectId;

            clickedTask.classList.remove('task-item');
            clickedTask.classList.add('edit-task-item');
            clickedTask.innerHTML = `
                <div class="edit-task-title-container">
                    <input type="text" class="edit-task-title-input" id="edit-task-title-input" name="edit-task-title-input" placeholder=${crud.allProjects[projectId].tasks[taskId].title}>
                </div>

                <div class="edit-task-project-container">
                    project
                </div>

                <div class="edit-task-description-container">
                    <textarea class="edit-task-title-input" id="edit-task-title-input" name="edit-task-title-input" placeholder=${crud.allProjects[projectId].tasks[taskId].description}></textarea>
                </div>

                <div class="edit-task-priority-and-due-date-container">
                    <div class="edit-task-due-date-container">
                        <input type="date" class="edit-task-title-input" id="edit-task-title-input" name="edit-task-title-input" value=${crud.allProjects[projectId].tasks[taskId].dueDate}>
                    </div>
                    <div class="edit-task-priority-container">
                        <select class="priority-selector" name="edit-priority-${taskId}" id="edit-priority-${taskId}">
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>
                
                <div class="edit-task-action-buttons">
                    <button type="button" class="edit-task-save-button">Save</button>
                    <button type="button" class="edit-task-cancel-button">Cancel</button>
                </div>
            `;

            const currentPriorityOption = document.querySelector(`#edit-priority-${taskId} option[value="${crud.allProjects[projectId].tasks[taskId].priority}"]`);
            currentPriorityOption.selected = true;
        }

        if (event.target.className === 'edit-task-cancel-button') {
            const clickedTask = event.target.closest('[data-task-id]');
            const taskId = clickedTask.dataset.taskId;
            const projectId = document.querySelector('.selected-project').dataset.projectId;
            clickedTask.innerHTML = '';
            displayTasks(crud.allProjects[projectId].tasks);
        }

    });

}();

export { addTask, taskDialog, displayProjects };