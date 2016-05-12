$(document).ready(function() {

$(document).keydown(function(){
    $('div').animate({left:'+=10px'},1);
});
});

$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("input[name=message]").val();
        $('#messages').append(" the .keydown funcion that targets the div made into pacman animated to move left +=10px");
    });
});