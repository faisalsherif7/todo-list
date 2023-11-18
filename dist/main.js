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

// Creation of new todo item for testing
const item = createToDoItem('item')
console.log(item);

const tasks = createProject('Tasks');
const learn = createToDoItem('Learn');
console.log(learn.project());
console.log(tasks);


console.log(allProjects);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbGxQcm9qZWN0cyA9IHt9O1xuXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBuZXcgcHJvamVjdFxuY29uc3QgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgY29uc3QgdG9kb3MgPSB7fTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0geyB0aXRsZSwgdG9kb3MgfTtcbiAgICBhbGxQcm9qZWN0c1t0aXRsZV0gPSBuZXdQcm9qZWN0O1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG4vLyBDcmVhdGluZyBkZWZhdWx0IHByb2plY3QgdG8gYmUgdXNlZFxuY29uc3QgaW5ib3ggPSBjcmVhdGVQcm9qZWN0KCdJbmJveCcpO1xuXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBuZXcgdG9kbyBsaXN0LCBhZGRlZCB0byBpbmJveCBieSBkZWZhdWx0XG5jb25zdCBjcmVhdGVUb0RvSXRlbSA9IGZ1bmN0aW9uKHRpdGxlLCBkaXJlY3RvcnkgPSBpbmJveCwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cbiAgICAvLyBEZWZpbmUgYSBcInByb2plY3RcIiBtZXRob2QgZm9yIGV2ZXJ5IHRvZG8gaXRlbSB0aGF0IHJldHVybnMgdGhlIHRpdGxlIG9mIHRoZSBwcm9qZWN0IGl0IGJlbG9uZ3MgdG9cbiAgICBjb25zdCBwcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0b3J5LnRpdGxlO1xuICAgIH1cblxuICAgIC8vIERlZmluZSBhIFwiY29tcGxldGVcIiBwcm9wZXJ0eSB3aGljaCBkZWZhdWx0cyB0byBGYWxzZVxuICAgIGNvbnN0IGNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG5ldyB0by1kbyBpdGVtXG4gICAgY29uc3QgY3JlYXRlZEl0ZW0gPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGNvbXBsZXRlIH07XG5cbiAgICAvLyBBZGQgdGhlIG5ld2x5IGNyZWF0ZWQgaXRlbSBvbnRvIHRoZSBkZXNpcmVkIHByb2plY3RzIGxpc3RcbiAgICBkaXJlY3RvcnkudG9kb3NbdGl0bGVdID0gY3JlYXRlZEl0ZW07XG5cbiAgICAvLyBBZGQgdXBkYXRlZCBwcm9qZWN0cyBsaXN0IHRvICdhbGwgcHJvamVjdHMnIGxpc3RcbiAgICBhbGxQcm9qZWN0c1tkaXJlY3RvcnkudGl0bGVdID0gZGlyZWN0b3J5O1xuXG4gICAgLy8gUmV0dXJuIHRoZSBpdGVtLCB0aGVyZWJ5IGFzc2lnbmluZyBpdCB0byB0aGUgY3JlYXRlZCB2YXJpYWJsZSBvdXRzaWRlIFxuICAgIHJldHVybiBjcmVhdGVkSXRlbTtcbn1cblxuLy8gQ3JlYXRpb24gb2YgbmV3IHRvZG8gaXRlbSBmb3IgdGVzdGluZ1xuY29uc3QgaXRlbSA9IGNyZWF0ZVRvRG9JdGVtKCdpdGVtJylcbmNvbnNvbGUubG9nKGl0ZW0pO1xuXG5jb25zdCB0YXNrcyA9IGNyZWF0ZVByb2plY3QoJ1Rhc2tzJyk7XG5jb25zdCBsZWFybiA9IGNyZWF0ZVRvRG9JdGVtKCdMZWFybicpO1xuY29uc29sZS5sb2cobGVhcm4ucHJvamVjdCgpKTtcbmNvbnNvbGUubG9nKHRhc2tzKTtcblxuXG5jb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9