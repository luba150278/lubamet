//---фильтрация картинок по категориям
var $=jQuery;

  AOS.init();

$(function() {
	var selectedClass = "";
	$(".filter").click(function(){
	selectedClass = $(this).attr("data-rel");
	$("#gallery").fadeTo(100, 0.1);
	$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
	setTimeout(function() {
		$("."+selectedClass).fadeIn().addClass('animation');
		$("#gallery").fadeTo(300, 1);
	}, 300);
});
});

//------работа с меню на мобильных---------
$('.fa-phone-square-alt').click(function (){opns();});

$('.fa-times').click(function()
{
	$('.fa-times').css( "display",  "none");
	$('.fa-phone-square-alt').css( "display",  "block");
	$('.fa-phone-square-alt').css( "visibility",  "visible");
	$('.fa-bars').css( "display",  "block");
	$('.fa-bars').css( "visibility",  "visible");
	$('.row_call').css( "display",  "none");
	$('.menu').css( "display",  "none");
});

$('.fa-bars').click(function(){opns();});


function opns()
{

	$('.fa-phone-square-alt').css( "display",  "none");
	$('.fa-times').css( "display",  "block");
	$('.fa-times').css( "visibility",  "visible");
	

	$('.row_call').css( "display",  "block");
	$('.row_call').css( "visibility",  "visible");
	$('.row_call').css("padding-top","10%");
	$('.fa-bars').css( "display",  "none");
	$('.menu').css( "display",  "block");
}

//----плавный скроллинг-----
$(function(){
	$('a[href^="#"]').on('click', function(event) {
	  // отменяем стандартное действие
	  event.preventDefault();
	  
	  var sc = $(this).attr("href"),
		  dn = $(sc).offset().top;
	  /*
	  * sc - в переменную заносим информацию о том, к какому блоку надо перейти
	  * dn - определяем положение блока на странице
	  */
	  
	  $('html, body').animate({scrollTop: dn}, 1000);
	  
	  /*
	  * 1000 скорость перехода в миллисекундах
	  */
	});
  });


//---модальное окно----
$('#exampleModal').on('show.bs.modal', function (event) {
	
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('Отправить сообщение для:\n' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$('.btn-primary').click(function(){
	
   if ($('#message-text').val()!=''){$('#modal_suc').css("display","block"); $('#modal_suc').text('Ваше сообщение успешно отправлено'); $('#modal_suc').css("color","#007676");}
   else{$('#modal_suc').css("display","block"); $('#modal_suc').css("color","red"); $('#modal_suc').text('Пустые сообщения не оправляются!');}
});


$('.btn-secondary').click(function(){
	var nt='';
	$('#message-text').val('');
	$('#modal_suc').css("display","none");
});

$('.close').click(function(){
	var nt='';
	$('#message-text').val('');
	$('#modal_suc').css("display","none");
});