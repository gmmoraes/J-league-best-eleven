  $(document).ready(function() {
			$(window).resize(function(){
				//alert( $(window).width());
				if (parseInt($(window).width()) < 1330){
					$("#loginStatus").css({
						'margin-left': '200px', 
					});
				}else if(parseInt($(window).width()) > 1330) {
					$("#loginStatus").css({
						'margin-left': '600px', 
					});
			}
			});
  });