var app = angular.module('urenaApp', []);

app.controller('LineaCtrl', [
'$scope',
function($scope, $filter){
  	$scope.lineas = [
        {
    		titleLinea: 'Linea 1',
    		description: 'Descripcion1',
    		image: 'img/linea3-3-g.jpg',
    		productos: [
    		{
    			title: 'Producto1',
    			description: 'The description of the first product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea1.jpg'
    		},
    		{
    			title: 'Producto2',
    			description: 'The description of the second product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea1.jpg'
    		},
    		{
    			title: 'Producto3',
    			description: 'The description of the third product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea1.jpg'
    		}
    		]
    	},
    	{
    		titleLinea: 'Linea 2',
    		description: 'Descripcion2',
    		image: 'img/linea3-3-g.jpg',
    		productos: [
    		{
    			title: 'Producto1',
    			description: 'The description of the first product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea2.jpg'
    		},
    		{
    			title: 'Producto2',
    			description: 'The description of the second product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea2.jpg'
    		},
    		{
    			title: 'Producto3',
    			description: 'The description of the third product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea2.jpg'
    		}
    		]
    	},
    	{
    		titleLinea: 'Linea3',
    		description: 'Descripcion3',
    		image: 'img/linea3-3-g.jpg',
    		productos: [
    		{
    			title: 'Producto1',
    			description: 'The description of the first product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea3.jpg'
    		},
    		{
    			title: 'Producto2',
    			description: 'The description of the second product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea4.jpg'
    		},
    		{
    			title: 'Producto3',
    			description: 'The description of the third product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea5.jpg'
    		}
    		]
    	},
    	{
    		titleLinea: 'Linea4',
    		description: 'Descripcion4',
    		image: 'img/linea3-3-g.jpg',
    		productos: [
    		{
    			title: 'Producto1',
    			description: 'The description of the first product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea2.jpg'
    		},
    		{
    			title: 'Producto2',
    			description: 'The description of the second product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea4.jpg'
    		},
    		{
    			title: 'Producto3',
    			description: 'The description of the third product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea2.jpg'
    		}
    		]
    	},
    	{
    		titleLinea: 'Linea5',
    		description: 'Descripcion5',
    		image: 'img/linea3-3-g.jpg',
    		productos: [
    		{
    			title: 'Producto1',
    			description: 'The description of the first product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea5.jpg'
    		},
    		{
    			title: 'Producto2',
    			description: 'The description of the second product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea5.jpg'
    		},
    		{
    			title: 'Producto3',
    			description: 'The description of the third product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea5.jpg'
    		}
    		]
        }
        ];

        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function (linea) {
            $scope.currentIndex = ($scope.currentIndex < linea.productos.length - 1) ? ++$scope.currentIndex : 0;
            $scope.selected_product = linea.productos[$scope.currentIndex];
        };

        $scope.nextSlide = function (linea) {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : linea.productos.length - 1;
            $scope.selected_product = linea.productos[$scope.currentIndex];
        };

        $scope.selected_linea_title = 'Linea3';
        $scope.selected_product = {title: 'Producto 1', description: 'The description of the first product. It is not important to see the quality, just the maximum length we can show at the end.'}
        $scope.selectedProduct = 'Producto1';
		$scope.getLinea = function(linea){
			$scope.selected_linea_title = linea.titleLinea;
			$('.productPartial').show('slow');
			$('.home').hide('fast');
		}
}]);