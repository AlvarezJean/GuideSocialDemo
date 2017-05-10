
angular.module('mainCtrl', ['ui.router'])

.controller('mainController', function($scope,$rootScope, $location,$state) {
	console.log('main');
	var vm = this;

	 var templates = [
	 	{
	 		titre : "Jeune",
			name : "jeune",
	 		url: '/jeune',
            templateUrl: 'views/fiches-situation/protection-sociale/jeune.html',
	 	},
	 	{
	 		titre : "Démission",
			name : "demission",
	 		url: '/demission',
            templateUrl: 'views/fiches-situation/emploi/demission.html',
	 	},
	 	{
	 		titre : "Allocations",
			name : "allocations",
	 		url: '/allocations',
            templateUrl: 'views/fiches-situation/ressources/allocations.html',
	 	},
	 	{
	 		titre : "Fin de droits",
			name : "fin-de-droits",
	 		url: '/fin-de-droits',
            templateUrl: 'views/fiches-situation/ressources/fin-de-droits.html',
	 	},
	 	{
	 		titre : "AME",
			name : "ame",
	 		url: '/ame',
            templateUrl: 'views/fiches-situation/protection-sociale/ame.html',
	 	},
	 	{
	 		titre : "AAH",
			name : "AAH",
	 		url: '/AAH',
            templateUrl: 'views/fiches-situation/ressources/AAH.html',
	 	},
	 	{
	 		titre : "SDF",
			name : "sdf",
	 		url: '/sdf',
            templateUrl: 'views/fiches-situation/logement/sdf.html',
	 	},
	    {
	    	titre : "Docteur, je ne peux pas vous payer",
			name : "payer",
            url: '/payer',
            templateUrl: 'views/fiches-situation/protection-sociale/payer.html',
        }, 
		{
			titre : "securité sociale",
			name : "secu",
            url: '/protection-sociale-secu',
            templateUrl: 'views/fiches-situation/protection-sociale/secu.html',
		},

		{
			titre : "Invalidité",
			name : "invalidite",
            url: '/invalidite',
            templateUrl: 'views/fiches-situation/protection-sociale/invalidite.html',
		},

		{
			titre : "Couverture sociale",
			name : "couverture-sociale",
		 	url:'/couverture-sociale',
			templateUrl: 'views/fiches-techniques/couverture-sociale.html'
		},
		{ 	
			titre : "Démissions légitimes",
			name: "demissions-legitimes",
			url: '/demissions-legitimes',
            templateUrl: 'views/fiches-techniques/demissions-legitimes.html'
        },
        {	
        	titre : "Aide juridictionnelle",
        	name:"aide-juridictionnelle",
        	url: '/aide-juridictionnelle',
            templateUrl: 'views/fiches-techniques/aide-juridictionnelle.html'
        },
 		{
 			titre : "Congés particuliers",
 			name:"conges-particuliers",
        	url: '/conges-particuliers',
            templateUrl: 'views/fiches-techniques/conges-particuliers.html'
 		},
 		{
 			titre : "Assurance chômage",
 			name: 'assurance-chomage',
 			url: '/assurance-chomage',
            templateUrl: 'views/fiches-techniques/assurance-chomage.html'
 		},
 		{
 			titre : "Procédure de licenciement",
 			name: 'procedure-licenciement',
 			url: '/procedure-licenciement',
            templateUrl: 'views/fiches-techniques/procedure-licenciement.html'
 		},
 		{
 			titre : "Couverture sociale des chômeurs",
 			name: 'CS-chomeur',
 			url: '/CS-chomeur',
            templateUrl: 'views/fiches-techniques/CS-chomeur.html'
 		},
 		{
 			titre : "Complémentaire de santé",
 			name: 'complementaires-sante',
 			url: '/complementaires-sante',
            templateUrl: 'views/fiches-techniques/complementaires-sante.html'
 		},
 		{
 			titre : "Aide au logement",
 			name: 'aide-logement',
 			url: '/aide-logement',
            templateUrl: 'views/fiches-techniques/aide-logement.html'
 		},
 		{
 			titre : "Surrendettement",
 			name: 'surendettement',
 			url: '/surendettement',
            templateUrl: 'views/fiches-techniques/surendettement.html'
 		},
 		{
 			titre : "Arrêt maladie",
 			name: 'arret-maladie',
 			url: '/arret-maladie',
            templateUrl: 'views/fiches-techniques/arret-maladie.html'
 		},
 		{
 			titre : "Inaptitude",
 			name: 'inaptitude',
 			url: '/inaptitude',
            templateUrl: 'views/fiches-techniques/inaptitude.html'
 		},
 		{
 			titre : "Conseil des prud'hommes",
 			name: 'conseil-prudhommes',
 			url: '/conseil-prudhommes',
            templateUrl: 'views/fiches-techniques/conseil-prudhommes.html'
 		},
 		{
 			titre : "RSA",
 			name: 'RSA',
 			url: '/RSA',
            templateUrl: 'views/fiches-techniques/RSA.html'
 		},
 		{
 			titre : "Assurance invalidité",
 			name: 'assurance-invalidite',
 			url: '/assurance-invalidite',
            templateUrl: 'views/fiches-techniques/assurance-invalidite.html'
 		},
  		{
  			titre : "Accident de travail",
 			name: 'accident-travail',
 			url: '/accident-travail',
            templateUrl: 'views/fiches-techniques/accident-travail.html'
 		},
   		{
   			titre : "Médiation familliale",
 			name: 'mediation-familiale',
 			url: '/mediation-familiale',
            templateUrl: 'views/fiches-techniques/mediation-familiale.html'
 		},
   		{
   			titre : "Etudiants",
 			name: 'etudiants-ft',
 			url: '/etudiants',
            templateUrl: 'views/fiches-techniques/etudiants-ft.html'
 		},
    	{
    		titre : "CMU",
 			name: 'CMU',
 			url:'/CMU',
            templateUrl: 'views/fiches-techniques/CMU.html'
 		},
    	{
    		titre : "Protection des étrangers",
 			name: 'protection-etrangers',
 			url:'/protection-etrangers',
            templateUrl: 'views/fiches-techniques/protection-etrangers.html'
 		},
    	{
    		titre : "Huissiers",
 			name: 'huissiers',
 			url:'/huissiers',
            templateUrl: 'views/fiches-techniques/huissiers.html'
 		},
    	{
    		titre : "Handicap",
 			name: 'handicap',
 			url:'/handicap',
            templateUrl: 'views/fiches-techniques/handicap.html'
 		},
    	{
    		titre : "APA",
 			name: 'apa',
 			url:'/apa',
            templateUrl: 'views/fiches-techniques/apa.html'
 		},
    	{
    		titre : "Longue maladie",
 			name: 'longue-maladie',
 			url:'/longue-maladie',
            templateUrl: 'views/fiches-techniques/longue-maladie.html'
 		},
    	{
    		titre : "Expulsion",
 			name: 'expulsion-prevention-procedure',
 			url:'/expulsion-prevention-procedure',
            templateUrl: 'views/fiches-techniques/expulsion-prevention-procedure.html'
 		},
    	{
    		titre : "Protection des mineurs",
 			name: 'protection-des-mineurs',
 			url:'/protection-mineurs',
            templateUrl: 'views/fiches-techniques/protection-mineurs.html'
 		},
    	{
    		titre : "Protection des majeurs",
 			name: 'protection-des-majeurs',
 			url:'/protection-majeurs',
            templateUrl: 'views/fiches-techniques/protection-majeurs.html'
 		},
    	{
    		titre : "Hospitalisation",
 			name: 'docs-hospitalisation',
 			url:'/docs-hospitalisation',
            templateUrl: 'views/fiches-techniques/docs-hospitalisation.html'
 		},
    	{
    		titre : "CESU",
 			name: 'cesu',
 			url:'/cesu',
            templateUrl: 'views/fiches-techniques/cesu.html'
 		},
    	{
 			name: 'longue-maladie',
 			url:'/longue-maladie',
            templateUrl: 'views/fiches-techniques/longue-maladie.html'
 		},
    	{
    		titre : "Maladies professionnelles",
 			name: 'maladies-professionnelles',
 			url:'/maladies-professionnelles',
            templateUrl: 'views/fiches-techniques/maladies-professionnelles.html'
 		},
    	{
    		titre : "Droits ss",
 			name: 'droits-ss',
 			url:'/droits-ss',
            templateUrl: 'views/fiches-techniques/droits-ss.html'
 		},
    	{
    		titre : "Assurance maternite",
 			name: 'assurance-maternite',
 			url:'/assurance-maternite',
            templateUrl: 'views/fiches-techniques/assurance-maternite.html'
 		},
   		{
   			titre : "Conseil des Prud'hommes",
 			name: 'conseil-prudhommes',
 			url:'/conseil-prudhommes',
            templateUrl: 'views/fiches-techniques/conseil-prudhommes.html'
 		},
   		{
   			titre : "Ticket modérateur",
 			name: 'ticket-moderateur',
 			url:'/ticket-moderateur',
            templateUrl: 'views/fiches-techniques/ticket-moderateur.html'
 		},
	]

	$scope.templates = templates;

	$scope.template = function(url){

		for (var i = 0; i < templates.length; i++) {
			if(templates[i].name == url){
				$scope.fiche = templates[i].templateUrl;
			}

		}
	}

	
	// // get info if a person is logged in
	// vm.loggedIn = Auth.isLoggedIn();

	// console.log(vm.loggedIn);

	// // check to see if a user is logged in on every request
	// $rootScope.$on('$locationChangeSuccess', function() {

	// 	vm.loggedIn = Auth.isLoggedIn();	

	// 	// get user information on page load
	// 	Auth.getUser()
	// 		.then(function(data) {
	// 			console.log(data);
	// 			vm.user = data;
	// 		});	
	// });	


	// // function to handle login form
	// vm.doLogin = function() {
	// 	console.log(vm.loginData.username);
	// 	vm.processing = true;

	// 	// clear the error
	// 	vm.error = '';

	// 	Auth.login(vm.loginData.username, vm.loginData.password)
	// 		.then(function(data) {
	// 			vm.processing = false;			
	// 			console.log(data);
	// 			console.log(data.data.message);

	// 			// if a user successfully logs in, redirect to users page
	// 			if (data.data.success){ 
	// 				// $state.go('/');
	// 				$state.transitionTo('/');
					
	// 			}else {
	// 				vm.error = data.data.message;
	// 			}
			

	// 	});
	// };

	// // function to handle logging out
	// vm.doLogout = function() {
	// 	console.log('logout');
	// 	Auth.logout();
	// 	vm.user = '';
	// 	console.log(vm.user);
	// 	$state.go('login');
	// };


	// vm.createSample = function() {
	// 	Auth.createSampleUser();
	// };

});