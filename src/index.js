document.addEventListener("DOMContentLoaded", () => {
  // your code here
// Selecting the necessary fields
  const form =document.querySelector("form") 
  let taskList = document.getElementById("tasks")  
    
  
  // Adding a delete button to remove task and button
 

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let taskDescriptionInput = document.getElementById("new-task-description")
    let paragraph= document.createElement("p")  
    paragraph.textContent = taskDescriptionInput.value  
    taskList.appendChild(paragraph)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete Task"
    paragraph.appendChild(deleteButton)
    deleteButton.addEventListener("click", function (event) {
      event.preventDefault();
      paragraph.remove();
    })
    form.reset();

  })
})


