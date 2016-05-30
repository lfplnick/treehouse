// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task"); // new-task
var addButton = document.getElementsByTagName("button")[0]; // first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); // #completed-tasks

// New Task List Item
var createNewTaskElement = function(taskString){
  // create list item
  var listItem = document.createElement("li");

  // input (checkbox)
  var checkBox = document.createElement("input");  // checkbox

  // label
  var label = document.createElement("label");

  // input (text)
  var editInput = document.createElement("input");

  // button.edit
  var editButton = document.createElement("button");

  // button.delete
  var deleteButton = document.createElement("button");

  // each element needs modifying

  // each element needs appending

  return listItem;
}

// Add a new task
var addTask = function(){
  console.log("Add task...");
  // create a new list item with text from new task
  var listItem = createNewTaskElement("Some new task");

  // Append listItem to incompleteTasksHolder
  
}

// Edit existing task
var editTask = function(){
  console.log("Edit task...");
  // when edit button is pressed
    // if class of parent is .editMode
      // switch from .editMode
      // label text become the input's value
    // else
      // switch to .editMode
      // input value becomes label's text
    // toggle .editMode
}

// Delete an existing task
var deleteTask = function(){
  console.log("Delete task...");
  // when delete button is pressed
    // remove the parent li from the ul
}

// Mark task as complete
var taskCompleted = function(){
  console.log("Task complete...");
  // when checkbox is checked
    // append the task li to the #completed-tasks
}

// Mark a task as incomplete
var taskIncomplete = function(){
  console.log("Task incomplete...");
  // when checkbox is unchecked
    // append task li to #incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
  console.log("bind list item events...");
  // select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  // bind editTask to edit button
  editButton.onclick = editTask;

  // bind deleteTask to the delete button
  deleteButton.onclick = deleteTask;

  // bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}


// Set the click handler to the addTask function
addButton.onclick = addTask;

// cycle over incompleteTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++){
    // bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

// cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++){
    // bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
