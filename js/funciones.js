$(document).ready(function(){
	//$('img').attr('src', $('img').attr('src') + '?' + Math.random());
	$('.productPartial').hide();
	$(".menu li").on('click', function(event){
		if(event.target.text === 'Productos'){
			$(".submenu").toggleClass("sacaSubMenu");
			$(".seleccion").toggleClass('menuSelect');
		}
	});
});