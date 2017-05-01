var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close");
var openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

$(document).ready(function() {

 $("#feedback").submit(function() {
  $.ajax({
   type: "POST",
   url: "mail.php",
   data: $(this).serialize()
  }).done(function() {
   $(this).find("input").val("");
    $("#modal").fadeIn(300);
     $(".close").click(function(){
     $("#modal").fadeOut(300);
   });
   $("#feedback").trigger("reset");
  });
  return false;
 });
});
