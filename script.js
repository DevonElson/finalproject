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
 
$("#map1").hide(); 
$("#map2").hide();
$("#map3").hide();


$("#apollo").click(function(){
    $("#map2").hide();
    $("#map3").hide();
    $("#map1").show();
});

   
         $("#msg").click(function(){
         $("#map1").hide();
         $("#map3").hide();
         $("#map2").show();
    
    
});

        $("#bowl").click(function(){
            $("#map1").hide();
            $("#map2").hide();
            $("#map3").show();
            
        });
        
        $("#apolloimg").hide();
        $("#msgimg").hide();
        $("#bowlimg").hide();
        
        $("#apollo").click(function(){
             $("#msgimg").hide();
             $("#bowlimg").hide();
             $("#apolloimg").show();
            
            
        });
        
        $("#msg").click(function(){
            $("#apolloimg").hide();
            $("#bowlimg").hide();
            $("#msgimg").show();
            
        });
        
        $("#bowl").click(function(){
            $("#apolloimg").hide();
            $("#msgimg").hide();
            $("#bowlimg").show();
        });
});