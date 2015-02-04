var titleLine;

var lines = {
	"Linea 1": "img/line1.jpg", "Linea 2": "img/line2.jpg", "Linea 3": "img/line3.jpg", "Linea 4": "img/line4.jpg", "Linea 5": "img/line5.jpg" 
}

$(document).ready(function(){
	$('.productPartial').hide();
	$(".menu li").on('click', function(event){
		if(event.target.text === 'Productos'){
			$(".submenu").toggleClass("sacaSubMenu");
			$(".seleccion").toggleClass('menuSelect');
		}
	});
});