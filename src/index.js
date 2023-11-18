const allProjects = [];

// Factory function to create new project
const createProject = function(title) {
    const todos = {};
    const newProject = { title, todos };
    allProjects.push(newProject);
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

    // Push the newly created item onto the desired projects list
    directory.todos[title] = createdItem;

    // Return the item, thereby assigning it to the created variable outside 
    return createdItem;
}

// Creation of new todo item for testing
const item = createToDoItem('item')
console.log(item);

const tasks = createProject('Tasks');
const learn = createToDoItem('Learn');
console.log(learn.project());
console.log(tasks);


console.log(allProjects);