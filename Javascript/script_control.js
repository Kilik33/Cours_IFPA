$(document).ready(function(){
/* DEROULEMENT DE POST ----- DEBUT */
var post = document.querySelector('li:first-child');
var info = document.querySelector('.info');
post.addEventListener("click",postEvent);

function postEvent() {
   $(info).css('display','block').show(500);
   console.log("essai");
};

})//Fin document.ready