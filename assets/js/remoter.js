$(function(){
	//don't forget to change base url when you want to change domain name
	var base_url = "http://localhost/lamp/";
	//update data in databse when user turn off or turn on
	function turnOnOff(lampID,status){
		//check if user turn on
		if(status==1){
			$.ajax({
                url:base_url+'process/powers.php',
                type:'POST',
                data:{
                   lamp_id:lampID,
                   turn_on:1
                },success:function(msg){
                  //use css to make the light on
			        $('.cube-switch').addClass('active');
			        $('.light').css({'opacity': '1'});
                },error:function(msg){
                  alert('Error: Cannot turn on the lamp, please contact to administrator!');
                }
            });
        //check if user turn off
		}else{
			$.ajax({
                url:base_url+'process/powers.php',
                type:'POST',
                data:{
                   lamp_id:lampID,
                   turn_off:1
                },success:function(msg){
                   //use css to make the light off
			        $('.cube-switch').removeClass('active');
			        $('.light').css({'opacity': '0'});
                },error:function(msg){
                  alert('Error: Cannot turn off the lamp, please contact to administrator!');
                }
            });
		}
			
	}

	$('.cube-switch .switch').click(function() {
		//when we click button will it is on, we have to make it off
	    if ($('.cube-switch').hasClass('active')) {
	    	//get lamp id 
	    	var lampId = $(this).parent().attr('id');
	    	//set status to 0
	    	var status = 0;
	    	turnOnOff(lampId,status);
	    	

	    //when we click button will it is off, we have to make it on
	    } else {
	    	//get lamp id 
	    	var lampId = $(this).parent().attr('id');
	    	//set status to 1
	    	var status = 1;
	    	turnOnOff(lampId,status);
	    }
	});
});
