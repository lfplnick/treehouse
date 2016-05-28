// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks

// Add a new task
var addTask = function{
  // When button is pressed
  // create a new list item with text from new task
    // input (checkbox)
    // label
    // input (text)
    // button.edit
    // button.delete
    // each element needs modified and appended
}

// Edit existing task
var editTask = function(){
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
  // when delete button is pressed
    // remove the parent li from the ul
}

// Mark task as complete
var taskCompleted = function{
  // when checkbox is checked
    // append the task li to the #completed-tasks
}

// Mark a task as incomplete
var taskIncomplete = function{
  // when checkbox is unchecked
    // append task li to #incomplete-tasks
}
