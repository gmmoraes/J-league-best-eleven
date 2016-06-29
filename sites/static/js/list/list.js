$(document).ready(function() {
    
    var imgTeam = '';

    $('#homeContainer').children().children().each(function() {
        var $this = $(this);
        //alert($this.attr('name'));
        if($this.attr('name') == "Sanfrecce Hiroshima"){
            imgTeam = "https://hdlogo.files.wordpress.com/2011/12/hiroshima-logo.png";
            $this.prepend("<img id='imgTeams' src='" + imgTeam + "' />");
            
        }else if($this.attr('name') == "Yokohama"){
            imgTeam ="https://hdlogo.files.wordpress.com/2011/12/yokohama-f-marinosv.png";
            $this.prepend("<img id='imgTeams' src='" + imgTeam + "' />");
            
        }else if($this.attr('name') == "Shonan Bellmare"){
            imgTeam ="https://upload.wikimedia.org/wikipedia/en/2/2c/ShonanBellmare.png";
            $this.prepend("<img id='imgTeams' src='" + imgTeam + "' />");
            
        }else if($this.attr('name') == "F.C.Tokyo"){
            imgTeam ="https://upload.wikimedia.org/wikipedia/en/4/45/FCTokyo.png";
            $this.prepend("<img id='imgTeams' src='" + imgTeam + "' />");
            
        }else if($this.attr('name') == "Sagan Tosu"){
            imgTeam ="https://upload.wikimedia.org/wikipedia/en/c/c0/SaganTosu.png";
            $this.prepend("<img id='imgTeams' src='" + imgTeam + "' />");
            
        }else if($this.attr('name') == "Kawasaki Frontale"){
            imgTeam="https://upload.wikimedia.org/wikipedia/en/7/74/KawasakiFrontale.png";
            $this.prepend("<img id='imgTeams' src='" + imgTeam + "' />");
            
        }else{
            var listImg = $this.attr('name');
            imgTeam = "https://hdlogo.files.wordpress.com/2011/12/"  + listImg.toLowerCase().replace(/\s/g, '-') + "-logo.png?w=700&h=";
            $this.prepend("<img id='imgTeams' src='" + imgTeam + "' />");
		}

    });
    
    function addDiv(id){
        if(document.querySelectorAll(id + ' .col-sm-4').length == 3){
            $(id + ' .col-sm-4').parent().append("<div class='col-sm-4'></div>");
            $(id + ' .col-sm-4').parent().prepend("<div class='col-sm-4'></div>");
            
        }else if(document.querySelectorAll(id + ' .col-sm-4').length == 4){
            $("<div class='col-sm-4'></div>").insertAfter($(id + ' .col-sm-4').eq(1));
        }else if(document.querySelectorAll(id + ' .col-sm-4').length == 2){
            $("<div class='col-sm-4'></div>").insertAfter($(id + ' .col-sm-4').eq(0));
            $(id + ' .col-sm-4').parent().append("<div class='col-sm-4'></div>");
            $(id + ' .col-sm-4').parent().prepend("<div class='col-sm-4'></div>");
            
        }else if(document.querySelectorAll(id + ' .col-sm-4').length == 1){
            $(id + ' .col-sm-4').parent().append("<div class='col-sm-4'></div>");
            $(id + ' .col-sm-4').parent().append("<div class='col-sm-4'></div>");
            $(id + ' .col-sm-4').parent().prepend("<div class='col-sm-4'></div>");
            $(id + ' .col-sm-4').parent().prepend("<div class='col-sm-4'></div>");
            
        }
    }
        
        addDiv("#attList");
        addDiv("#mfList");
        addDiv("#dfList");
        addDiv("#gkList");
        
        
        if($("#listEmpty").is(":visible")){
            $("#homeContainer").css({
                'background-image': 'none', 
                'box-shadow': 'none'
            });
        }
 
});