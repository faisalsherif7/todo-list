/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// Factory function to create new project
const createProject = function(title) {
    const todos = [];
    return { title, todos };
}

// Creating default project to be used
const inbox = createProject('Inbox');

// Factory function to create new todo list, added to inbox by default
const createToDoItem = function(title, description, dueDate, priority, container = inbox) {

    // Define a "project" property for every todo item that returns the title of the project it belongs to
    const project = container.title;

    // Define a "complete" property which defaults to False
    const complete = false;

    // Create the new to-do item
    const createdItem = { title, description, dueDate, priority, project, complete };

    // Push the newly created item onto the desired projects list
    container.todos.push(createdItem);

    // Return the item, thereby assigning it to the created variable outside 
    return createdItem;
}

// Creation of new todo item for testing
const item = createToDoItem('item')
console.log(item);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgbmV3IHByb2plY3RcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbih0aXRsZSkge1xuICAgIGNvbnN0IHRvZG9zID0gW107XG4gICAgcmV0dXJuIHsgdGl0bGUsIHRvZG9zIH07XG59XG5cbi8vIENyZWF0aW5nIGRlZmF1bHQgcHJvamVjdCB0byBiZSB1c2VkXG5jb25zdCBpbmJveCA9IGNyZWF0ZVByb2plY3QoJ0luYm94Jyk7XG5cbi8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIG5ldyB0b2RvIGxpc3QsIGFkZGVkIHRvIGluYm94IGJ5IGRlZmF1bHRcbmNvbnN0IGNyZWF0ZVRvRG9JdGVtID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29udGFpbmVyID0gaW5ib3gpIHtcblxuICAgIC8vIERlZmluZSBhIFwicHJvamVjdFwiIHByb3BlcnR5IGZvciBldmVyeSB0b2RvIGl0ZW0gdGhhdCByZXR1cm5zIHRoZSB0aXRsZSBvZiB0aGUgcHJvamVjdCBpdCBiZWxvbmdzIHRvXG4gICAgY29uc3QgcHJvamVjdCA9IGNvbnRhaW5lci50aXRsZTtcblxuICAgIC8vIERlZmluZSBhIFwiY29tcGxldGVcIiBwcm9wZXJ0eSB3aGljaCBkZWZhdWx0cyB0byBGYWxzZVxuICAgIGNvbnN0IGNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG5ldyB0by1kbyBpdGVtXG4gICAgY29uc3QgY3JlYXRlZEl0ZW0gPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGNvbXBsZXRlIH07XG5cbiAgICAvLyBQdXNoIHRoZSBuZXdseSBjcmVhdGVkIGl0ZW0gb250byB0aGUgZGVzaXJlZCBwcm9qZWN0cyBsaXN0XG4gICAgY29udGFpbmVyLnRvZG9zLnB1c2goY3JlYXRlZEl0ZW0pO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBpdGVtLCB0aGVyZWJ5IGFzc2lnbmluZyBpdCB0byB0aGUgY3JlYXRlZCB2YXJpYWJsZSBvdXRzaWRlIFxuICAgIHJldHVybiBjcmVhdGVkSXRlbTtcbn1cblxuLy8gQ3JlYXRpb24gb2YgbmV3IHRvZG8gaXRlbSBmb3IgdGVzdGluZ1xuY29uc3QgaXRlbSA9IGNyZWF0ZVRvRG9JdGVtKCdpdGVtJylcbmNvbnNvbGUubG9nKGl0ZW0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9