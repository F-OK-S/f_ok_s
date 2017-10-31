 
 var lastelemet;

 $(document).ready(function() {
   	$("#view-control" ).children().on( "click", function() {
   	 	lastelemet = changeView(this, lastelemet);   
	});
 }); 
 
 function changeView(element, lastelements){
    if(element!=lastelements){
	    if($(element).attr("data-size")=="block"){	         
		    $("#view").removeClass();
		    $("#view").addClass("block");		     
		    $(element).addClass('view-control__button--active').siblings('i').removeClass('view-control__button--active');      
	    }
	    if($(element).attr("data-size")=="row"){         
		    $("#view").removeClass();
		    $("#view").addClass("row");		     
		    $(element).addClass('view-control__button--active').siblings('i').removeClass('view-control__button--active'); 
	    }
 	}
 	return element;
};
