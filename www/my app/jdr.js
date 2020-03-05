$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

var str = $('.number').html();
str.replace('&nbsp;', '');
$('.number').html(str);