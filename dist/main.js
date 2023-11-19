/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const allProjects = {};

// Factory function to create new project
const createProject = function(title) {
    const todos = {};
    const newProject = { title, todos };
    allProjects[title] = newProject;
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

    // Return the item, thereby assigning it to the created variable outside 
    return createdItem;
}

// Add item DOM
const form = document.querySelector('.add-item-form');
document.querySelector('button').addEventListener('click', function (event) {
    console.log('here');
    event.preventDefault();
    
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#due-date').value;
    const priority = document.querySelector('#priority').value;
    
    createToDoItem(title, inbox, description, dueDate, priority);
    console.log(inbox.todos);
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWxsUHJvamVjdHMgPSB7fTtcblxuLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgbmV3IHByb2plY3RcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbih0aXRsZSkge1xuICAgIGNvbnN0IHRvZG9zID0ge307XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHsgdGl0bGUsIHRvZG9zIH07XG4gICAgYWxsUHJvamVjdHNbdGl0bGVdID0gbmV3UHJvamVjdDtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuLy8gQ3JlYXRpbmcgZGVmYXVsdCBwcm9qZWN0IHRvIGJlIHVzZWRcbmNvbnN0IGluYm94ID0gY3JlYXRlUHJvamVjdCgnSW5ib3gnKTtcblxuLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgbmV3IHRvZG8gbGlzdCwgYWRkZWQgdG8gaW5ib3ggYnkgZGVmYXVsdFxuY29uc3QgY3JlYXRlVG9Eb0l0ZW0gPSBmdW5jdGlvbih0aXRsZSwgZGlyZWN0b3J5ID0gaW5ib3gsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXG4gICAgLy8gRGVmaW5lIGEgXCJwcm9qZWN0XCIgbWV0aG9kIGZvciBldmVyeSB0b2RvIGl0ZW0gdGhhdCByZXR1cm5zIHRoZSB0aXRsZSBvZiB0aGUgcHJvamVjdCBpdCBiZWxvbmdzIHRvXG4gICAgY29uc3QgcHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdG9yeS50aXRsZTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgYSBcImNvbXBsZXRlXCIgcHJvcGVydHkgd2hpY2ggZGVmYXVsdHMgdG8gRmFsc2VcbiAgICBjb25zdCBjb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgdG8tZG8gaXRlbVxuICAgIGNvbnN0IGNyZWF0ZWRJdGVtID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBjb21wbGV0ZSB9O1xuXG4gICAgLy8gQWRkIHRoZSBuZXdseSBjcmVhdGVkIGl0ZW0gb250byB0aGUgZGVzaXJlZCBwcm9qZWN0cyBsaXN0XG4gICAgZGlyZWN0b3J5LnRvZG9zW3RpdGxlXSA9IGNyZWF0ZWRJdGVtO1xuXG4gICAgLy8gQWRkIHVwZGF0ZWQgcHJvamVjdHMgbGlzdCB0byAnYWxsIHByb2plY3RzJyBsaXN0XG4gICAgYWxsUHJvamVjdHNbZGlyZWN0b3J5LnRpdGxlXSA9IGRpcmVjdG9yeTtcblxuICAgIC8vIFJldHVybiB0aGUgaXRlbSwgdGhlcmVieSBhc3NpZ25pbmcgaXQgdG8gdGhlIGNyZWF0ZWQgdmFyaWFibGUgb3V0c2lkZSBcbiAgICByZXR1cm4gY3JlYXRlZEl0ZW07XG59XG5cbi8vIEFkZCBpdGVtIERPTVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1mb3JtJyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG4gICAgXG4gICAgY3JlYXRlVG9Eb0l0ZW0odGl0bGUsIGluYm94LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIGNvbnNvbGUubG9nKGluYm94LnRvZG9zKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9