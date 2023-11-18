// Factory function to create new project
const createProject = function(title) {
    const todos = [];
    return { title, todos };
}

// Creating default project to be used
const inbox = createProject('Inbox');

// Factory function to create new todo list, added to inbox by default
const createToDoItem = function(title, description, dueDate, priority, container = inbox) {

    // Define a "project" property for every todo item that returns the title of the project it belongs to
    const project = container.title;

    // Define a "complete" property which defaults to False
    const complete = false;

    // Create the new to-do item
    const createdItem = { title, description, dueDate, priority, project, complete };

    // Push the newly created item onto the desired projects list
    container.todos.push(createdItem);

    // Return the item, thereby assigning it to the created variable outside 
    return createdItem;
}

// Creation of new todo item for testing
const item = createToDoItem('item')
console.log(item);