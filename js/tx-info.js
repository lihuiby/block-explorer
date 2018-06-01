var app = angular.module("myApp",['pascalprecht.translate','ngSanitize']);

/*var host = 'http://browser.ifoods.com';*/
/*var projectName = "ifoods-explorer-home"*/
/*var lang = window.localStorage.getItem("lang");*/

app.config(['$translateProvider',
	function($translateProvider) {
		$translateProvider.useStaticFilesLoader({
			prefix: '/'+projectName+'/i18n/',
			suffix: '.json'
		});

		var lang = window.localStorage.getItem("lang")||'cn';
		$translateProvider.preferredLanguage(lang);
		$translateProvider.useSanitizeValueStrategy('escapeParameters');
	}]);

app.controller("tx-info-Controller",function ($scope, $translate, $http) {

	$scope.langs = [{
		name: "English",
		lang: "cn"
	},
		{
			name: "中文",
			lang: "en"
		}];

	var lang = window.localStorage.getItem("lang");

	if( lang == "en"){
		$scope.langSelectIndex = 1;
	}else {
		$scope.langSelectIndex = 0;
	}

	var hash = getQueryString('hash')
	/**
	 * 交易详情
	 */
	$http({
		method: 'GET',
		url:   host + '/api/ifood/tx/' + hash,
	}).then(function successCallback(response) {
		if(response.data.code != "0000" || response.data.data==null) {
			console.log(response.data.msg)
			window.location.href='/'+projectName+'/html/404.html'
		}
		var data = response.data.data;
		$scope.txInfo = data;

	}, function errorCallback(response) {
		console.log("tx info error");
	});


})