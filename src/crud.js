import { v4 as uuid } from 'uuid';
import * as dom from './dom.js';

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
    dom.displayProjects();
    dom.addProjectSelector();
    return newProject;
};

// Factory function to create new todo list, added to inbox by default
const createTask = function(title, directory, description, dueDate, priority) {

    // Define a "project" method for every todo item that returns the title of the project it belongs to
    const project = function () {
        return directory.title;
    }

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

export const deleteTask = function(id) {
    for (const key in allProjects) {
        const project = allProjects[key];
        const tasks = project.tasks;
        for (const key in project.tasks) {
            if (key === id) {
                delete allProjects[project.id].tasks[key];
                updateLocalStorage();
                dom.displayTasks(tasks);
            }
        }
    }
};

export const deleteProject = function(id) {
    if (id === inboxId) {
        return console.log('cannot delete inbox');
    }
    for (const key in allProjects) {
        if (key === id) {
            delete allProjects[key];
            updateLocalStorage();
            dom.displayProjects();
        }
    }
};

export { allProjects, syncAllProjects, updateLocalStorage, createProject, createTask }