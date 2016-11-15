app.controller('InputController',['$scope',function($scope) {
	
}]).config(function($mdThemingProvider){
	// $mdThemingProvider.theme('default')
	// .primaryPalette('deep-orange')
	// .accentPalette('cyan')
	// .warnPalette('red').dark();
	$mdThemingProvider.definePalette('myColorPalette',{
		'50': 'd32f2f',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
	 'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

	    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
	     '200', '300', '400', 'A100'],
	    'contrastLightColors': undefined   
	});
	$mdThemingProvider.theme('default')
	.primaryPalette('myColorPalette',{
		'default': '50', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100'
	})
});