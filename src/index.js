import './style.css';
import * as crud from './crud.js';
import * as dom from './dom.js';

crud.syncAllProjects();
dom.displayProjects();
dom.displayProjectOptions();
dom.displayTasks(crud.allProjects[Object.keys(crud.allProjects)[0]].tasks);
dom.defaultSelectedProject();

console.log(crud.allProjects);
