$(document).ready(function() {
    var array = [];
    var $trSelected = $('tr[selected="selected"]');
	$("#test").click(function(){
	var selectedPlayers = document.querySelectorAll('tr[selected ="selected"]').length;
	
	for (var i = 0; i<selectedPlayers;i++){
		teamName = $trSelected.children().eq(2).html();
		namePlayer = $trSelected.children().eq(1).html();
		positionPlayer = $trSelected.children().eq(0).html();
	}
	$.each($("div .row").find('div[fulled="yes"]'), function() {
		var $this = $(this);
	    teamName = $this.children().eq(3).html();
		namePlayer = $this.children().eq(1).html();
		positionPlayer = $this.children().eq(2).html();
		array.push({"teamName":teamName, "namePlayer":namePlayer, "positionPlayer":positionPlayer});
	});
	
	for(i=0; i < array.length;i++) { 
	    $("#playerDiv" + i +" input:nth-child(2)").val(array[i].teamName);
		$("#playerDiv" + i + " input:nth-child(1)").val(array[i].namePlayer);
		$("#playerDiv" + i + " input:nth-child(3)").val(array[i].positionPlayer);
	}
	    
	});
	$('#playerForm').submit(function() {
	    if (document.querySelectorAll("#dfRow > *[fulled]").length < 3){
		alert("You need at least 3 defenders");
		return false;
	    }
	    if (document.querySelectorAll("#gkRow > *[fulled]").length < 1){
	        alert("You need at least 1 goalkeeper");
	        return false;
	        
	    }else{
	    	var selectedPlayers = document.querySelectorAll('tr[selected ="selected"]').length;
	    	for (var i = 0; i<selectedPlayers;i++){
	    		teamName = $trSelected.children().eq(2).html();
	    		namePlayer = $trSelected.children().eq(1).html();
	    		positionPlayer = $trSelected.children().eq(0).html();
	    	}
	    	$.each($("div .row").find('div[fulled="yes"]'), function() {
	    		var $this = $(this);
	    		teamName = $this.children().eq(3).html();
	    		namePlayer = $this.children().eq(1).html();
	    		positionPlayer = $this.children().eq(2).html();
	    		array.push({"teamName":teamName, "namePlayer":namePlayer, "positionPlayer":positionPlayer});
	    	});
	    	
	    	for(i=0; i < array.length;i++) { 
	    		$("#playerDiv" + i +" input:nth-child(2)").val(array[i].teamName);
	    		$("#playerDiv" + i + " input:nth-child(1)").val(array[i].namePlayer);
	    		$("#playerDiv" + i + " input:nth-child(3)").val(array[i].positionPlayer);
	    	}
	        return true;
	    }
	});
});
			