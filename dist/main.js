/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// Factory function to create new project
const createProject = function(title) {
    const todos = {};
    return { title, todos };
}

// Creating default project to be used
const inbox = createProject('Inbox');

// Factory function to create new todo list, added to inbox by default
const createToDoItem = function(title, container = inbox, description, dueDate, priority) {

    // Define a "project" method for every todo item that returns the title of the project it belongs to
    const project = function () {
        return container.title;
    }

    // Define a "complete" property which defaults to False
    const complete = false;

    // Create the new to-do item
    const createdItem = { title, description, dueDate, priority, project, complete };

    // Push the newly created item onto the desired projects list
    container.todos[title] = createdItem;

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIG5ldyBwcm9qZWN0XG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICBjb25zdCB0b2RvcyA9IHt9O1xuICAgIHJldHVybiB7IHRpdGxlLCB0b2RvcyB9O1xufVxuXG4vLyBDcmVhdGluZyBkZWZhdWx0IHByb2plY3QgdG8gYmUgdXNlZFxuY29uc3QgaW5ib3ggPSBjcmVhdGVQcm9qZWN0KCdJbmJveCcpO1xuXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBuZXcgdG9kbyBsaXN0LCBhZGRlZCB0byBpbmJveCBieSBkZWZhdWx0XG5jb25zdCBjcmVhdGVUb0RvSXRlbSA9IGZ1bmN0aW9uKHRpdGxlLCBjb250YWluZXIgPSBpbmJveCwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cbiAgICAvLyBEZWZpbmUgYSBcInByb2plY3RcIiBtZXRob2QgZm9yIGV2ZXJ5IHRvZG8gaXRlbSB0aGF0IHJldHVybnMgdGhlIHRpdGxlIG9mIHRoZSBwcm9qZWN0IGl0IGJlbG9uZ3MgdG9cbiAgICBjb25zdCBwcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLnRpdGxlO1xuICAgIH1cblxuICAgIC8vIERlZmluZSBhIFwiY29tcGxldGVcIiBwcm9wZXJ0eSB3aGljaCBkZWZhdWx0cyB0byBGYWxzZVxuICAgIGNvbnN0IGNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG5ldyB0by1kbyBpdGVtXG4gICAgY29uc3QgY3JlYXRlZEl0ZW0gPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGNvbXBsZXRlIH07XG5cbiAgICAvLyBQdXNoIHRoZSBuZXdseSBjcmVhdGVkIGl0ZW0gb250byB0aGUgZGVzaXJlZCBwcm9qZWN0cyBsaXN0XG4gICAgY29udGFpbmVyLnRvZG9zW3RpdGxlXSA9IGNyZWF0ZWRJdGVtO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBpdGVtLCB0aGVyZWJ5IGFzc2lnbmluZyBpdCB0byB0aGUgY3JlYXRlZCB2YXJpYWJsZSBvdXRzaWRlIFxuICAgIHJldHVybiBjcmVhdGVkSXRlbTtcbn1cblxuLy8gQ3JlYXRpb24gb2YgbmV3IHRvZG8gaXRlbSBmb3IgdGVzdGluZ1xuY29uc3QgaXRlbSA9IGNyZWF0ZVRvRG9JdGVtKCdpdGVtJylcbmNvbnNvbGUubG9nKGl0ZW0pO1xuXG5jb25zdCB0YXNrcyA9IGNyZWF0ZVByb2plY3QoJ1Rhc2tzJyk7XG5jb25zdCBsZWFybiA9IGNyZWF0ZVRvRG9JdGVtKCdMZWFybicpO1xuY29uc29sZS5sb2cobGVhcm4ucHJvamVjdCgpKTtcbmNvbnNvbGUubG9nKHRhc2tzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==