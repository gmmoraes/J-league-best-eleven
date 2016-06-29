$(document).ready(function() {
    var attrDiv = $("#playerDiv").attr('name');
    var table = $.table;

			$('#tableVote tbody').on( 'click', 'tr', function () {
				var row = table.row( this ).data();
				var tsRow = $(this);
				var attr = $(this).attr('selected');
				
                /** allows to check how many players are on field**/
				var fwCounter = document.querySelectorAll('#attRow > *[fulled]').length;
				var dfCounter = document.querySelectorAll('#dfRow > *[fulled]').length;
				var mfCounterPosition = document.querySelectorAll('#mfRow > *[fulled]').length;
				var mfOCounterPosition = document.querySelectorAll('#mfORow > *[fulled]').length;
				var gkCounter = document.querySelectorAll('#gkRow > *[fulled]').length;
				var totalCounter = dfCounter + fwCounter + gkCounter + mfCounterPosition + mfOCounterPosition;


                /** add img to the field **/
				var imgTeam = '';
				if(row[2] == "Sanfrecce Hiroshima"){
					imgTeam = "https://hdlogo.files.wordpress.com/2011/12/hiroshima-logo.png";
				}else if(row[2] == "Yokohama"){
					imgTeam ="https://hdlogo.files.wordpress.com/2011/12/yokohama-f-marinosv.png";
				}else if(row[2] == "Shonan Bellmare"){
					imgTeam ="https://upload.wikimedia.org/wikipedia/en/2/2c/ShonanBellmare.png";
				}else if(row[2] == "F.C.Tokyo"){
					imgTeam ="https://upload.wikimedia.org/wikipedia/en/4/45/FCTokyo.png";
				}else if(row[2] == "Sagan Tosu"){
					imgTeam ="https://upload.wikimedia.org/wikipedia/en/c/c0/SaganTosu.png";
				}else if(row[2] == "Kawasaki Frontale"){
					imgTeam="https://upload.wikimedia.org/wikipedia/en/7/74/KawasakiFrontale.png";
				}else{
					imgTeam = "https://hdlogo.files.wordpress.com/2011/12/"  + row[2].toLowerCase().replace(/\s/g, '-') + "-logo.png?w=700&h=";
				}
				
				
				
				function addToPitch(position, id, counter){
					if (row[0] =="MF"&& $("#mfORow div:nth-child(3)").is(":empty") && mfCounterPosition == 5 && mfOCounterPosition < 1 && !attr && totalCounter < 11){
						$("#mfORow div:nth-child(3)").attr('fulled', 'yes');
						$("#mfORow div:nth-child(3)").append("<img id='imgTeams' src='" + imgTeam + "' />" + "<div id='fieldName'>" + row[1]+ "</div>" + "<div style='visibility: hidden'>" + row[0]+ "</div>" + "<div style='visibility: hidden'>" + row[2]+ "</div>");
						tsRow.attr('selected', 'yes');


					}else if (row[0] ==position && counter == 1 && !attr && totalCounter < 11){
						//$(id + " > div:empty:nth-child(4)").insertBefore($(id + " div:nth-child(3)"));
						
						$(id + " .col-sm-4").each(function() {
							if($(this).text().length < 1){
								//alert($(this).text());
								$(this).remove();
								
							}
						});
						$(id + " .col-sm-4").eq(0).after("<div class='col-sm-4'></div>");
						$(id).prepend("<div class='col-sm-4'id='teste'></div>");
						$(id).append("<div class='col-sm-4' id='teste'></div>");
						$(id).append("<div class='col-sm-4' id='teste'></div>");
						$(id + " > div:empty:nth-child(4)").attr('fulled', 'yes');
						$(id + " > div:empty:nth-child(4)").append("<img id='imgTeams' src='" + imgTeam + "' />" + "<div id='fieldName'>" + row[1]+ "</div>" + "<div style='visibility: hidden'>" + row[0]+ "</div>" + "<div style='visibility: hidden'>" + row[2]+ "</div>");
						tsRow.attr('selected', 'yes');

						
					}else if (row[0] ==position && counter ==3 && !attr && totalCounter < 11){
						//$(id + " > div:empty:nth-child(5)").insertBefore($(id + " div:nth-child(3)"));
						
						$(id + " .col-sm-4").each(function() {
							if($(this).text().length < 1){
								//alert($(this).text());
								$(this).remove();
								
							}
						});
						//$(id + " .col-sm-4").eq(0).after("<div class='col-sm-4'></div>");
						$(id + " .col-sm-4").eq(1).after("<div class='col-sm-4'></div>");
						$(id).append("<div class='col-sm-4' id='teste'></div>");
						$(id + " > div:empty:nth-child(5)").attr('fulled', 'yes');
						$(id + " > div:empty:nth-child(5)").append("<img id='imgTeams' src='" + imgTeam + "' />" + "<div id='fieldName'>" + row[1]+ "</div>" +  "<div style='visibility: hidden'>" + row[0]+ "</div>" +  "<div style='visibility: hidden'>" + row[2]+ "</div>");

						/**
						$(id + " > div:empty:nth-child(1)").append("<img id='imgTeams' src='" + imgTeam + "' />" + "<div id='fieldName'>" + row[1]+ "</div>");
						$(id + " .col-sm-4").each(function() {
							if($(this).text().length < 1){
								$(this).insertBefore($(id + " div:nth-child(3)"));
							}
						});
						tsRow.attr('selected', 'yes');
						**/
						
					} else if (row[0] ==position && $(id + " div:nth-child(3)").is(":empty") && !attr && totalCounter < 11){
						$(id + " > div:empty:nth-child(3)").attr('fulled', 'yes');
						$(id + " > div:empty:nth-child(3)").append("<img id='imgTeams' src='" + imgTeam + "' />" + "<div id='fieldName'>" + row[1]+ "</div>" +  "<div style='visibility: hidden'>" + row[0]+ "</div>" +  "<div style='visibility: hidden'>" + row[2]+ "</div>");
						tsRow.attr('selected', 'yes');
						
						
						
					}else if (row[0] ==position && $(id+ ' div:empty:first')&& !attr && totalCounter < 11){
						$(id+ ' div:empty:first').attr('fulled', 'yes');
						$(id+ ' div:empty:first').append("<img id='imgTeams' src='" + imgTeam + "' />" + "<div id='fieldName'>" + row[1]+ "</div>" + "<div style='display:nothing'>" + row[0]+ "</div>" + "<div style='display:nothing'>" + row[2]+ "</div>");
						
						
					}
				}
				
				addToPitch("DF", "#dfRow",dfCounter);
				addToPitch("FW", "#attRow",fwCounter);
				addToPitch("MF", "#mfRow",mfCounterPosition);
				
			    if (row[0] =="MF"&& mfOCounterPosition > 0 && totalCounter < 11 && mfCounterPosition == 5 ){
			    	addToPitch("MF", "#mfORow",mfOCounterPosition);
			    }

				

			    /** goalkeeper **/
			    if (row[0] =="GK" && $('#gkRow div:empty:first')&& !attr && totalCounter < 11){
			    	$('#gkRow div:empty:first').attr('fulled', 'yes');
			    	$('#gkRow div:empty:first').append("<img id='imgTeams' src='" + imgTeam + "' />" + "<div id='fieldName'>" + row[1]+ "</div>" +  "<div style='visibility: hidden'>" + row[0]+ "</div>" +  "<div style='visibility: hidden'>" + row[2]+ "</div>");
			    	tsRow.attr('selected', 'yes');

			    }
				
			} );
			
			/** gets divs togehter **/
			function three(id){
				//alert(id + "' > *[fulled]'" );
				if (document.querySelectorAll(id +  " > *[fulled]").length == 3){

					$(id + " .col-sm-4").each(function() {
						if($(this).text().length < 1){
							$(this).remove();
						}
					});
					$(id).prepend("<div class='col-sm-4'></div>");
					$(id).append("<div class='col-sm-4'></div>");
				}else if (document.querySelectorAll(id +  " > *[fulled]").length == 2){

					$(id + " .col-sm-4").each(function() {
						if($(this).text().length < 1){
							$(this).remove();

						}
					});
				
				$(id + " .col-sm-4").eq(0).after("<div class='col-sm-4'></div>");
				$(id).prepend("<div class='col-sm-4'id='teste'></div>");
				$(id).append("<div class='col-sm-4' id='teste'></div>");
					
				}else if (document.querySelectorAll(id +  " > *[fulled]").length == 1){
					$(id + " .col-sm-4").each(function() {
						if($(this).text().length < 1){
							$(this).remove();

						}
					});
				
				$(id).prepend("<div class='col-sm-4'id='teste'></div>");
				$(id).prepend("<div class='col-sm-4'id='teste'></div>");
				$(id).append("<div class='col-sm-4' id='teste'></div>");
				$(id).append("<div class='col-sm-4' id='teste'></div>");
				}
			}

			
			/** removes players from field and selected atribute **/
			$("div").on( 'dblclick',".col-sm-4", function () {

				playerDeleteName = $(this).children("#fieldName").text(); 
				$.each($("#tableVote tbody").find("tr"), function() {
					if($(this).children().eq(1).text() == playerDeleteName){
						$(this).removeAttr("selected"); 
					}
				});
				$(this).find(":hidden").remove();
				
				$(this).children().remove();
				
				$(this).removeAttr("fulled");

				three("#dfRow");
				three("#attRow");
				three("#mfRow");
				three("#mfORow");


			});
            
            // makes the divs draggable
			$( ".row" ).sortable();
			$( ".row" ).disableSelection();
			
			$('#post-form').on('submit', function(event){
				event.preventDefault();
				console.log("form submitted!")  // sanity check
				create_post();
				
			});


				
});