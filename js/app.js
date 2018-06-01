var app = angular.module("myApp",['pascalprecht.translate','ngSanitize']);

var mySwiper;

var host = 'http://browser.ifoods.com';
var projectName = "ifoods-explorer-home"
var lang = window.localStorage.getItem("lang");

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

app.controller("myControlller",function ($scope, $translate, $http) {
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

	$scope.changeLangSelectIndex = function() {
		if ($scope.langSelectIndex === 0) {
			$scope.langSelectIndex = 1;
		} else {
			$scope.langSelectIndex = 0;
		}
		$translate.use($scope.langs[$scope.langSelectIndex].lang);
		window.localStorage.setItem("lang",$scope.langs[$scope.langSelectIndex].lang);
		$("#top-navbar-1").removeClass("in");
	};

	/**
	 * search on click
	 */
	$scope.searchOnclick=function() {
		var searchVar = $("#searchValueId").val()
		if(searchVar == null || searchVar == "") {
			return;
		}
		window.location.href='/'+projectName+'/html/search.html' + '#' + searchVar
	}

	/**
	 * 回车
	 */
	$scope.searchKeyup = function(e){
		var keycode = window.event?e.keyCode:e.which;
		if(keycode==13){
			$scope.searchOnclick();
		}
	};



})

