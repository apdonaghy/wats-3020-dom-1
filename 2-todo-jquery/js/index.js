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