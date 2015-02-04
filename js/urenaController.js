var app = angular.module('urenaApp', []);

app.controller('LineaCtrl', [
'$scope',
function($scope, $filter){
  	$scope.lineas = [
        {
    		title: 'Linea 1',
    		description: 'Descripcion 1',
    		image: 'img/linea3-3-g.jpg',
    		productos: [
    		{
    			title: 'Producto 1',
    			description: 'The description of the first product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea1.jpg'
    		},
    		{
    			title: 'Producto 2',
    			description: 'The description of the second product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea1.jpg'
    		},
    		{
    			title: 'Producto 3',
    			description: 'The description of the third product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea1.jpg'
    		}
    		]
    	},
    	{
    		title: 'Linea 2',
    		description: 'Descripcion 2',
    		image: 'img/linea3-3-g.jpg',
    		productos: [
    		{
    			title: 'Producto 1',
    			description: 'The description of the first product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea2.jpg'
    		},
    		{
    			title: 'Producto 2',
    			description: 'The description of the second product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea2.jpg'
    		},
    		{
    			title: 'Producto 3',
    			description: 'The description of the third product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea2.jpg'
    		}
    		]
    	},
    	{
    		title: 'Linea 3',
    		description: 'Descripcion 3',
    		image: 'img/linea3-3-g.jpg',
    		productos: [
    		{
    			title: 'Producto 1',
    			description: 'The description of the first product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea3.jpg'
    		},
    		{
    			title: 'Producto 2',
    			description: 'The description of the second product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea3.jpg'
    		},
    		{
    			title: 'Producto 3',
    			description: 'The description of the third product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea3.jpg'
    		}
    		]
    	},
    	{
    		title: 'Linea 4',
    		description: 'Descripcion 4',
    		image: 'img/linea3-3-g.jpg',
    		productos: [
    		{
    			title: 'Producto 1',
    			description: 'The description of the first product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea4.jpg'
    		},
    		{
    			title: 'Producto 2',
    			description: 'The description of the second product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea4.jpg'
    		},
    		{
    			title: 'Producto 3',
    			description: 'The description of the third product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea4.jpg'
    		}
    		]
    	},
    	{
    		title: 'Linea 5',
    		description: 'Descripcion 5',
    		image: 'img/linea3-3-g.jpg',
    		productos: [
    		{
    			title: 'Producto 1',
    			description: 'The description of the first product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea5.jpg'
    		},
    		{
    			title: 'Producto 2',
    			description: 'The description of the second product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea5.jpg'
    		},
    		{
    			title: 'Producto 3',
    			description: 'The description of the third product. It is not important to see the quality, just the maximum length we can show at the end.',
    			image: 'img/linea5.jpg'
    		}
    		]
        }
        ];
        $scope.selected_linea_title = 'Linea 3';
        $scope.selected_linea;
        $scope.selectedProduct = 'Producto 1';
		$scope.getLinea = function(linea){
			$filter
			$scope.selected_linea_title = linea.title;
			$scope.selected_linea = linea;
			$('.productPartial').show('slow');
			$('.home').hide('fast');
		}
}]);