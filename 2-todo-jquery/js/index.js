/*
Description: A program that uses Jquery to make an interactive to-do list. The user is given an input field to add to-do content to and then the program allows them to check off the items they added when completed, so they have a visual record of what they've finished. 
Input: a string
Output: displays/lists items that user adds to input
Usage: runs in the browser
*/

$(function(){

  $(document).submit(function(event){

    event.preventDefault();

let itemElement = $("[name='item-input']");
let itemValue = itemElement.val();

    if (itemValue.length !== 0) {

$(".todo-list").append("<li><input type='checkbox'><label>" + itemValue + "</label></li>")

itemElement.val('');
      $(":checkbox").change(function (event) {
        if ($(this).is(':checked')) {
          $(this).siblings("label").css("text-decoration", "line-through")
        } else {
          $(this).siblings("label").css("text-decoration", "none")
        }
      }) 

    }
  }) 
}) 