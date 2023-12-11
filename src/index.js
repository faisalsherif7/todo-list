import './style.css';
import * as crud from './crud.js';
import * as dom from './dom.js';

crud.syncAllProjects();
dom.displayProjects();
dom.displayTasks();

console.log(crud.allProjects);