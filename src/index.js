let allProjects;

const items = localStorage.getItem('allProjects');
if (items === '') {
    allProjects = {};
} else {
    const parsedItems = JSON.parse(items);
    allProjects = parsedItems
}

console.log(allProjects);

// Factory function to create new project
const createProject = function(title) {
    const todos = {};
    const newProject = { title, todos };
    allProjects[title] = newProject;
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
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
    localStorage.setItem('allProjects', JSON.stringify(allProjects));

    // Return the item, thereby assigning it to the created variable outside 
    return createdItem;
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