$(document).ready(function() {
    /**changes container size on total size change**/
    $(window).resize(function(){
	//alert( $(window).width());
	if (parseInt($(window).width()) < 1330){
	    $("#fieldContainer").css({
	        'margin': '0px 0px 0px 350px', 
	    });
	    $("#pVote").css({
	        'margin': '0px 0px 0px 900px', 

	    });
	    $("#voteButtonForm").css({
	        'margin': '-130px 0px 0px 900px', 

	    });
	}else if(parseInt($(window).width()) > 1330) {
	    $("#fieldContainer").css({
	        'margin': '0px auto', 
	    });
	    $("#pVote").css({
	        'margin': '0px 0px 0px 1000px', 

	    });
	    $("#voteButtonForm").css({
	        'margin': '0px 0px 0px 1000px', 

	    });
	}
    });
});