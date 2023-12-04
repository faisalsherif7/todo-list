import { v4 as uuid } from 'uuid';
import * as dom from './dom.js';

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

// Factory function to create new project
function createProject (title) { 
    const tasks = {};
    const newProject = { title, tasks };
    allProjects[title] = newProject;
    updateLocalStorage();
    dom.populateSidebar();
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
}

export const getTasksInProject = function (projectName) {
    return allProjects[projectName].tasks;
}

export const deleteTask = function(id) {
    for (const key in allProjects) {
        const project = allProjects[key];
        const tasks = project.tasks;
        for (const key in project.tasks) {
            if (key === id) {
                delete allProjects[project.title].tasks[key];
                updateLocalStorage();
                dom.displayTasks(tasks);
            }
        }
    }
}

export { allProjects, syncAllProjects, updateLocalStorage, createProject, createTask }