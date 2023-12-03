import './style.css';
import * as crud from './crud.js';
import * as dom from './dom.js';

crud.syncAllProjects();
dom.populateSidebar();
dom.selectProjectFromList();
dom.displayTasks(crud.allProjects.Inbox.tasks);

console.log(crud.allProjects);

