import { v4 as uuid } from 'uuid';

let allProjects;
let inboxId;

// Check if local storage contains "allProjects" and if not, initiate it with default "inbox" project
const syncAllProjects = function() {
    const items = localStorage.getItem('allProjects');
    let inbox;
    if (items === null) {
        allProjects = {};
        inbox = createProject('Inbox');
    } else {
        const parsedItems = JSON.parse(items);
        allProjects = parsedItems
        inbox = allProjects[Object.keys(allProjects)[0]];
    }
    inboxId = inbox.id;
};

// Function to update local storage after making changes to allProjects object
const updateLocalStorage = function() {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
};

// Factory function to create new project
function createProject (title) { 
    const tasks = {};
    const id = uuid();
    const newProject = { title, tasks, id };
    allProjects[id] = newProject;
    updateLocalStorage();
    return newProject;
};

// Factory function to create new todo list, added to inbox by default
const createTask = function(title, directory, description, dueDate, priority) {

    // Define a "complete" property which defaults to False
    const complete = false;

    // Create a unique identifier for created object
    const id = uuid();

    // Create the new to-do item
    const createdTask = { title, description, dueDate, priority, directory, complete, id };

    // Add the newly created item onto the desired projects list
    allProjects[directory].tasks[id] = createdTask;

    // Update local storage
    updateLocalStorage();

    // Return the item, thereby assigning it to the created variable outside 
    return createdTask;
};

export const getTasksInProject = function (projectId) {
    return allProjects[projectId].tasks;
};

export const deleteTask = function(taskId, projectId) {
    delete allProjects[projectId].tasks[taskId];
    updateLocalStorage();
};

export const deleteProject = function(id) {
    if (id === inboxId) {
        return console.log('cannot delete inbox');
    }
    for (const key in allProjects) {
        if (key === id) {
            delete allProjects[key];
            updateLocalStorage();
        }
    }
};

export const editTask = function(taskId, currentProject, newProject, title, description, dueDate, priority) {
    if (currentProject != newProject) {
        deleteTask(taskId);
        createTask(title, newProject, description, dueDate, priority);
    }
    else {
        allProjects[currentProject].tasks[taskId].title = title;
        allProjects[currentProject].tasks[taskId].description = description;
        allProjects[currentProject].tasks[taskId].dueDate = dueDate;
        allProjects[currentProject].tasks[taskId].priority = priority;
        updateLocalStorage();
    }
};

export const toggleCompletion = function(taskId, projectId) {
    allProjects[projectId].tasks[taskId].complete = !allProjects[projectId].tasks[taskId].complete;
    updateLocalStorage();
};

export const editProjectTitle = function(projectId, newTitle) {
    allProjects[projectId].title = newTitle;
    updateLocalStorage()
}

export { allProjects, syncAllProjects, updateLocalStorage, createProject, createTask }