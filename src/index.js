import './style.css';

let allProjects;

// Check if local storage contains "allProjects" and if not, initiate it as an empty object
const items = localStorage.getItem('allProjects');
if (items === '') {
    allProjects = {};
} else {
    const parsedItems = JSON.parse(items);
    allProjects = parsedItems
}

const updateLocalStorage = function() {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
}

// Factory function to create new project
const createProject = function(title) {
    const todos = {};
    const newProject = { title, todos };
    allProjects[title] = newProject;
    updateLocalStorage();
    return newProject;
}

// Creating default project to be used
const inbox = createProject('Inbox');

// Factory function to create new todo list, added to inbox by default
const createToDoItem = function(title, directory = inbox, description, dueDate, priority) {

    // Define a "project" method for every todo item that returns the title of the project it belongs to
    const project = function () {
        return directory.title;
    }

    // Define a "complete" property which defaults to False
    const complete = false;

    // Create the new to-do item
    const createdItem = { title, description, dueDate, priority, project, complete };

    // Add the newly created item onto the desired projects list
    directory.todos[title] = createdItem;

    // Add updated projects list to 'all projects' list
    allProjects[directory.title] = directory;

    // Update local storage
    updateLocalStorage();

    // Return the item, thereby assigning it to the created variable outside 
    return createdItem;
}

const viewAllProjects = function() {
    
}


// Add item DOM
const form = document.querySelector('.add-item-form');
document.querySelector('button').addEventListener('click', function (event) {
    event.preventDefault();
    
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#due-date').value;
    const priority = document.querySelector('#priority').value;
    
    createToDoItem(title, inbox, description, dueDate, priority);
})

const addTaskButton = document.querySelector('.add-task');
const closeDialogButton = document.querySelector('.close-dialog')
const dialog = document.querySelector('dialog');
addTaskButton.addEventListener("click", () => {
    dialog.showModal();
  });
closeDialogButton.addEventListener("click", () => {
    dialog.close();
})
