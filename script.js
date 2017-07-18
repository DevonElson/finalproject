/* globals $ */
$(document).ready(function(){
    $("#song").hide();
    $("#secondsong").hide();
    
$("#guac").click(function(){
    $("#secondsong").hide();
    $("#song").show();
});
    
$("#frose").click(function(){
    $("#song").hide();
    $("#secondsong").show();
});
 

});