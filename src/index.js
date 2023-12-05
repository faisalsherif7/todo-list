import './style.css';
import * as crud from './crud.js';
import * as dom from './dom.js';

crud.syncAllProjects();
dom.displayProjects();
dom.displayTasks(crud.allProjects[Object.keys(crud.allProjects)[0]].tasks);

console.log(crud.allProjects);