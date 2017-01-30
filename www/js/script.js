/**
 * Created by robot on 10/11/16.
 */
ons.bootstrap()
	.controller('AppController', function ($scope) {
		$scope.searchPlaceholder = 'Search for money sent & received';
	})
	.controller('Page1Controller', function ($scope) {
		$scope.pageText = 'Page 1...';
	})
	.controller('Page2Controller', function ($scope, $rootElement) {
		$scope.items = [
			{
				"_id": "57e8c5a0e75b464a6a5562c5",
				"index": 0,
				"guid": "8dda606b-f04d-41be-990f-5ee5662f45b8",
				"picture": "https://placeimg.com/32/32/any",
				"name": "Shelby Wolfe",
				"gender": "female",
				"email": "shelbywolfe@hivedom.com",
				"phone": "+1 (978) 450-2932"
			},
			{
				"_id": "57e8c5a05059e0a34fbec1da",
				"index": 1,
				"guid": "d8cecfda-3a1d-48ac-8ae4-0e8fdac5c6a3",
				"picture": "https://placeimg.com/32/32/any",
				"name": "Lawson Brooks",
				"gender": "male",
				"email": "lawsonbrooks@hivedom.com",
				"phone": "+1 (863) 445-2566"
			},
			{
				"_id": "57e8c5a079bc93a584a73b48",
				"index": 2,
				"guid": "3e4a3cdf-90bc-4497-9957-52818b57f787",
				"picture": "https://placeimg.com/32/32/any",
				"name": "Juana Humphrey",
				"gender": "female",
				"email": "juanahumphrey@hivedom.com",
				"phone": "+1 (880) 436-3372"
			},
			{
				"_id": "57e8c5a08049fd04d9089c7f",
				"index": 3,
				"guid": "d6fe2cba-6f1c-492f-9bca-c815a943dca4",
				"picture": "https://placeimg.com/32/32/any",
				"name": "Knowles Mcknight",
				"gender": "male",
				"email": "knowlesmcknight@hivedom.com",
				"phone": "+1 (847) 579-3197"
			},
			{
				"_id": "57e8c5a0204d1d926fac0784",
				"index": 4,
				"guid": "542c2d37-afe7-4b13-90d0-71c191952c5d",
				"picture": "https://placeimg.com/32/32/any",
				"name": "Stark Santana",
				"gender": "male",
				"email": "starksantana@hivedom.com",
				"phone": "+1 (881) 415-3947"
			},
			{
				"_id": "57e8c5a0b3986a02e93f604e",
				"index": 5,
				"guid": "746b9beb-2e59-4cd2-a041-e69ba35f5928",
				"picture": "https://placeimg.com/32/32/any",
				"name": "Michelle Camacho",
				"gender": "female",
				"email": "michellecamacho@hivedom.com",
				"phone": "+1 (827) 461-3783"
			},
			{
				"_id": "57e8c5a0d18548b256f9bcea",
				"index": 6,
				"guid": "6d2745e8-6c43-4a52-b912-ffbfb55c278c",
				"picture": "https://placeimg.com/32/32/any",
				"name": "Mccray Underwood",
				"gender": "male",
				"email": "mccrayunderwood@hivedom.com",
				"phone": "+1 (910) 589-2056"
			},
			{
				"_id": "57e8c5a0d5c4306f78ae566e",
				"index": 7,
				"guid": "ea757633-ffbd-4712-bd1d-8a11ef962d2d",
				"picture": "https://placeimg.com/32/32/any",
				"name": "Bianca Frost",
				"gender": "female",
				"email": "biancafrost@hivedom.com",
				"phone": "+1 (862) 586-3132"
			},
			{
				"_id": "57e8c5a04af123b48a714cfd",
				"index": 8,
				"guid": "ef8f86d1-8d38-463d-83ba-be4a7bc340a8",
				"picture": "https://placeimg.com/32/32/any",
				"name": "Shepard Oconnor",
				"gender": "male",
				"email": "shepardoconnor@hivedom.com",
				"phone": "+1 (956) 548-2015"
			},
			{
				"_id": "57e8c5a07074a320b0b5fae5",
				"index": 9,
				"guid": "51868ac3-c508-4e11-9ed7-d83166a75a34",
				"picture": "https://placeimg.com/32/32/any",
				"name": "Stanton Pratt",
				"gender": "male",
				"email": "stantonpratt@hivedom.com",
				"phone": "+1 (914) 470-2649"
			},
			{
				"_id": "57e8c5a0d54ecbcad4512383",
				"index": 10,
				"guid": "3ef6e8ce-9f04-4893-ada3-521533ec7c0c",
				"picture": "https://placeimg.com/32/32/any",
				"name": "Logan Sharp",
				"gender": "male",
				"email": "logansharp@hivedom.com",
				"phone": "+1 (957) 480-3706"
			}
		];

		$scope.tapNumber = function(item){
			$scope.pressKey(item.phone);
			dialer.show();
		};

		$scope.pressKey = function (number) {
			var numInput = document.querySelector('#numInput');
			numInput.value += number;
			numInput.focus();
			numInput.scrollLeft = numInput.scrollWidth;
			angular.element(numInput).triggerHandler('input');
		};

		$scope.backspace = function () {
			var numInput = document.querySelector('#numInput');
			numInput.value = (numInput.value.slice(0, -1));
			numInput.focus();
			numInput.scrollLeft = numInput.scrollWidth;
			angular.element(numInput).triggerHandler('input');
		};

		$scope.hideDialer=function(){
			dialer.hide();
			var numInput = document.querySelector('#numInput');
			numInput.value = '';
			angular.element(numInput).triggerHandler('input');
		};

		$scope.Pay = function (useCase) {
			payOptions.hide();
			$scope.hideDialer();
			myNavigator.pushPage('page5.html', { title: '' });
		};

	})
	.controller('Page3Controller', function () {
		this.pageText = '..Page 3...';
	})
	.controller('Page4Controller', function () {
		this.pageText = 'Page 4...';
	}).controller('TransferPageController', function ($scope, $rootElement) {
		this.pageText = '..Page 4...';
	});

ons.ready(function () {
	//console.log("Onsen UI is ready!");
	tabBar.on('prechange', function (event) {});
	tabBar.on('postchange', function (event) {});
});