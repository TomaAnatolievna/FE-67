$(document).ready(function() {
  $('.accordion .title').on('click', f_acc);
});
 
function f_acc(){
  $('.accordion .body').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
}