/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const allProjects = [];

// Factory function to create new project
const createProject = function(title) {
    const todos = {};
    const newProject = { title, todos };
    allProjects.push(newProject);
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

    // Push the newly created item onto the desired projects list
    directory.todos[title] = createdItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EseUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgbmV3IHByb2plY3RcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbih0aXRsZSkge1xuICAgIGNvbnN0IHRvZG9zID0ge307XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHsgdGl0bGUsIHRvZG9zIH07XG4gICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuLy8gQ3JlYXRpbmcgZGVmYXVsdCBwcm9qZWN0IHRvIGJlIHVzZWRcbmNvbnN0IGluYm94ID0gY3JlYXRlUHJvamVjdCgnSW5ib3gnKTtcblxuLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgbmV3IHRvZG8gbGlzdCwgYWRkZWQgdG8gaW5ib3ggYnkgZGVmYXVsdFxuY29uc3QgY3JlYXRlVG9Eb0l0ZW0gPSBmdW5jdGlvbih0aXRsZSwgZGlyZWN0b3J5ID0gaW5ib3gsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXG4gICAgLy8gRGVmaW5lIGEgXCJwcm9qZWN0XCIgbWV0aG9kIGZvciBldmVyeSB0b2RvIGl0ZW0gdGhhdCByZXR1cm5zIHRoZSB0aXRsZSBvZiB0aGUgcHJvamVjdCBpdCBiZWxvbmdzIHRvXG4gICAgY29uc3QgcHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdG9yeS50aXRsZTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgYSBcImNvbXBsZXRlXCIgcHJvcGVydHkgd2hpY2ggZGVmYXVsdHMgdG8gRmFsc2VcbiAgICBjb25zdCBjb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgdG8tZG8gaXRlbVxuICAgIGNvbnN0IGNyZWF0ZWRJdGVtID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBjb21wbGV0ZSB9O1xuXG4gICAgLy8gUHVzaCB0aGUgbmV3bHkgY3JlYXRlZCBpdGVtIG9udG8gdGhlIGRlc2lyZWQgcHJvamVjdHMgbGlzdFxuICAgIGRpcmVjdG9yeS50b2Rvc1t0aXRsZV0gPSBjcmVhdGVkSXRlbTtcblxuICAgIC8vIFJldHVybiB0aGUgaXRlbSwgdGhlcmVieSBhc3NpZ25pbmcgaXQgdG8gdGhlIGNyZWF0ZWQgdmFyaWFibGUgb3V0c2lkZSBcbiAgICByZXR1cm4gY3JlYXRlZEl0ZW07XG59XG5cbi8vIENyZWF0aW9uIG9mIG5ldyB0b2RvIGl0ZW0gZm9yIHRlc3RpbmdcbmNvbnN0IGl0ZW0gPSBjcmVhdGVUb0RvSXRlbSgnaXRlbScpXG5jb25zb2xlLmxvZyhpdGVtKTtcblxuY29uc3QgdGFza3MgPSBjcmVhdGVQcm9qZWN0KCdUYXNrcycpO1xuY29uc3QgbGVhcm4gPSBjcmVhdGVUb0RvSXRlbSgnTGVhcm4nKTtcbmNvbnNvbGUubG9nKGxlYXJuLnByb2plY3QoKSk7XG5jb25zb2xlLmxvZyh0YXNrcyk7XG5cblxuY29uc29sZS5sb2coYWxsUHJvamVjdHMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==