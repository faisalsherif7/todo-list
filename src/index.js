import './style.css';

let allProjects;

// Check if local storage contains "allProjects" and if not, initiate it with default "inbox" project
const syncAllProjects = function() {
    const items = localStorage.getItem('allProjects');
    if (items === null) {
        allProjects = {};
        createProject('Inbox');
    } else {
        const parsedItems = JSON.parse(items);
        allProjects = parsedItems
    }
}

// Function to update local storage after making changes to allProjects object
const updateLocalStorage = function() {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
}

syncAllProjects();

// Factory function to create new project
function createProject (title) { 
    const tasks = {};
    const newProject = { title, tasks };
    allProjects[title] = newProject;
    updateLocalStorage();
    populateSidebar();
    selectProjectFromList();
    return newProject;
}

// Factory function to create new todo list, added to inbox by default
const createTask = function(title, directory, description, dueDate, priority) {

    // Define a "project" method for every todo item that returns the title of the project it belongs to
    const project = function () {
        return directory.title;
    }

    // Define a "complete" property which defaults to False
    const complete = false;

    // Create the new to-do item
    const createdItem = { title, description, dueDate, priority, project, complete };

    // Add the newly created item onto the desired projects list
    allProjects[directory].tasks[title] = createdItem;

    // Update local storage
    updateLocalStorage();

    console.log(allProjects);

    // Return the item, thereby assigning it to the created variable outside 
    return createdItem;
}


// Accept form input and create new task
const addTask = function() {
    document.querySelector('.submit-task-form').addEventListener('click', function (event) {
        event.preventDefault();
        
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const dueDate = document.querySelector('#due-date').value;
        const priority = document.querySelector('#priority').value;
        const project = document.querySelector('#select-project').value;
        
        createTask(title, project, description, dueDate, priority);
    })
}();

const addProject = function() {
    document.querySelector('.submit-project-form').addEventListener('click', function (event) {
        event.preventDefault();
        const title = document.querySelector('#project-title').value;
        createProject(title);
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
    for (const project in allProjects) {
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
    for (const project in allProjects) {
        selectProject.innerHTML += `
            <option value="${project}">${project}</option>
        `;
    }
};

populateSidebar();
selectProjectFromList();

console.log(allProjects);