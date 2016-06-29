$(document).ready(function() {
    teamInfo = $.teamInfo;

	var array_of_arrays = [];
	var nameTeam = [];
	for (var w=0; w<18;w++){
	    for (var i =3; i < teamInfo[w].length - 1; i = i + 3){
	        teamInfo[w].splice(i, 0, teamInfo[w][0]);
	    };
	    teamInfo[w].splice(42, 0, teamInfo[w][0]);
	    for (var i =1; i < teamInfo[w].length - 2; i = i + 3){
	        array_of_arrays.push(teamInfo[w].slice(i,i+3))
	    }
	}
	/** datatable creation **/
	$.table = $('#tableVote').DataTable( {
	    data: array_of_arrays,
		columns: [
		    { title: "Position" },
			{ title: "Name" },
			{ title: "Team" }
			]
	});

    
});

