
(function(){
var app=angular.module( 'CompApp', [ 'ngMaterial','ngMessages' ] )
app.controller('InputController',['$scope',function($scope) {
	
	}]).controller('pageInputController',['$scope',function($scope){

}]).controller('formController',['$scope',function($scope){

}])
.config(function($mdThemingProvider){
	// $mdThemingProvider.theme('default')
	// .primaryPalette('deep-orange')
	// .accentPalette('cyan')
	// .warnPalette('red').dark();
	$mdThemingProvider.definePalette('myColorPalette',{
	'50': '#f7e7fa',
  '100': '#e2a8ec',
  '200': '#d27ae2',
  '300': '#bf40d5',
  '400': '#b22dc9',
  '500': '#9c27b0',
  '600': '#862197',
  '700': '#701c7e',
  '800': '#591665',
  '900': '#43114c',
  'A100': '#f7e7fa',
  'A200': '#e2a8ec',
  'A400': '#b22dc9',
  'A700': '#701c7e',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 A100 A200'
	});
	$mdThemingProvider.theme('default')
	.primaryPalette('myColorPalette');
});
     
})()

