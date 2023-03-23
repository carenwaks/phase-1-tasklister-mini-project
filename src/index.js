document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form =document.querySelector("form") //select the form
  let taskList = document.getElementById("tasks")  //select the task Id
  let taskDescriptionInput = document.getElementById("new-task-description")  //select the input area
  let paragraph= document.createElement("p")  //create a new paragraph
  paragraph.textContent = taskDescriptionInput.value  //paragraph content to reflect content in the task description input box
  taskList.appendChild(paragraph)  //connect the new button to the task list
  //adding a delete button to remove task and button
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "Delete Task"
  paragraph.appendChild(deleteButton)
  deleteButton.addEventListener("click", function (event) {
    paragraph.remove();
  })

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  })
})

// let createTaskButtton = document.querySelector('tasks')
// 
// taskDescriptionInput.addEventListener('click', function createTask () {
//   

//   paragraph.textContent = taskDescriptionInput.value;
//   taskList.appendChild(paragraph)
// })