/*
Description: A program that uses "vanilla .js" to make an interactive to-do list. The user is given an input field to add to-do content to and then the program allows them to check off the items they added when completed, so they have a visual record of what they've finished. 
Input: a string
Output: displays/lists items that user adds to input
Usage: runs in the browser
*/

document.addEventListener('DOMContentLoaded', (event) => {
  
  document.addEventListener('submit', (event) => {


  event.preventDefault();

    let itemInput = document.querySelector("input[name='item-input']");

    let itemValue = itemInput.value;

    if (itemValue.length !== 0) {
      let newItemEl = document.createElement("li");
      let newCheckBox = document.createElement("input");
      newCheckBox.setAttribute('type', 'checkbox');
      newItemEl.appendChild(newCheckBox);
      let newLabel = document.createElement("label");
      
      newLabel.textContent = itemValue;

      newItemEl.appendChild(newLabel);

      let list = document.querySelector('.todo-list');
      list.appendChild(newItemEl);
  
      itemInput.value = '';

      
      newCheckBox.addEventListener("click", function(event) {
       
        if (this.nextSibling.style.textDecoration == "line-through") {
          this.nextSibling.style.textDecoration = "";
        } else {
          this.nextSibling.style.textDecoration = "line-through";
        }
      });
}


  }) 
}) 