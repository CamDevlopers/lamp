$(function(){
  //don't forget to change base url when you want to change domain name
  var base_url = "http://localhost/lamp/";
  //function for receiver to check every second 
	function get_lamp_turn_on(){
		$.ajax({
          url:base_url+'process/powers.php',
          type:'POST',
          //dataType:'json',
          data:{
             get_turn_on:1
          },success:function(msg){
             $('#'+msg).addClass('bg-white');
             //make it change the background 
             setTimeout(function(){ $('#'+msg).removeClass('bg-white'); }, 300);
             //alert get session we have to clear all session
                $.ajax({
                      url:base_url+'process/powers.php',
                      type:'POST',
                      //dataType:'json',
                      data:{
                         clearData:1
                      },success:function(msg){
                         $('#'+msg).removeClass('bg-white');
                      },error:function(msg){
                        //alert('Error: Please enable javascript!');
                      }
                });
          },error:function(msg){
            //alert('Error: Please enable javascript!');
          }
    });
	}

  setInterval(function(){ get_lamp_turn_on(); }, 10);
  
});