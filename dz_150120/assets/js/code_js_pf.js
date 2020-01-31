
//----изменяем фото в галереи в зависимости от фокуса

$('#portfolio_main > .container>.row>.thumb1').hover(
function(){ 
         
 
 	$('#portfolio_main > .container>.row>.thumb1>div').each(function () 
 	{  			
 		var cn=this.className; 

 		$("." + cn).hover(function() {
 			$("." + cn).css( "background",  "url('assets/img/camera_icon_empty.png') no-repeat center top");
 			$("." + cn).css( "background-size",  "cover");
			//$("." + cn).css( "padding",  "40%");
			
			$("." + cn+'>.trumb2').css( "visibility",  "visible");
			//$("." + cn+'>.trumb2').css("padding","5%");
 		}, 

  		function() {
  			$("." + cn).css( "background",  "url('assets/img/photos.png') no-repeat center top");
  			$("." + cn).css( "background-size",  "cover");
			//$("." + cn).css( "padding",  "40%");
			$("." + cn+'>.trumb2').css( "visibility",  "hidden");
			//$("." + cn+'>.trumb2').css("padding","10%");

  		});


 	});

      
},
function(){});



//--------------------------------------Добавляем классы в галерею--------

$(document).ready(function(){
  
  	
  	var n=1;

  	$('#portfolio_main > .container>.row>.thumb1').each(function () { 
  		//"<div class='dcell'></div>"
  		var nc='<div class="'+'tc'+n+'"></div>';
  		//alert(nc);
  			var newElems = $(nc)
  			.append("<div class='trumb2'><h3>Lorem Amet Dolor</h3><p> \
  				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> \
  				<button>Details</button></div>");
        	/*.append("<p>abs rtete gsdgsdgf sfsdfsdf</p>")
        	.append("<button>Details</button>");*/

  			newElems.css( "background",  "url('assets/img/photos.png') no-repeat center top");
  			newElems.css( "background-size",  "cover");
  			newElems.css("padding","13%");
  			//newElems.css( "padding",  "40%");
  			
  			$(this).append(newElems); 
  			n++;
		});
		
 	$('.trumb2').css( "visibility",  "hidden");
});

