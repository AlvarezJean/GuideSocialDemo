angular.module('app.routes', ['ui.router'])
.config(function($locationProvider,$stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('/', {
            url: '/index',
            templateUrl: 'public/index.html',
            controller: 'mainController'
        })

        .state('home', {
            url: '/Accueil',
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        .state('menu-fs', {
            url: '/Menu-fiches-situations',
            templateUrl: 'views/fiches-situation/menu-fs.html',
            controller: 'mainController'
        })

        .state('menu-ft', {
            url: '/Menu-fiches-techniques',
            templateUrl: 'views/fiches-techniques/menu-ft.html',
            controller: 'mainController'
        })

        .state('menu-lt', {
            url: '/Menu-lettres-type',
            templateUrl: 'views/fiches-type/menu-lt.html',
            controller: 'mainController'
        })
        //Fiche de situation
        .state('secu', {
            url: '/protection-sociale-secu',
            templateUrl: 'views/fiches-situation/protection-sociale/secu.html',
            controller: 'mainController'
        })


        .state('payer', {
            url: '/payer',
            templateUrl: 'views/fiches-situation/protection-sociale/payer.html',
            controller: 'mainController'
        })

        .state('facture', {
            url: '/facture',
            templateUrl: 'views/fiches-situation/protection-sociale/facture.html',
            controller: 'mainController'
        })

        .state('invalidite', {
            url: '/invalidite',
            templateUrl: 'views/fiches-situation/protection-sociale/invalidite.html',
            controller: 'mainController'
        })


        .state('jeune', {
            url: '/jeune',
            templateUrl: 'views/fiches-situation/protection-sociale/jeune.html',
            controller: 'mainController'
        })


        .state('etranger', {
            url: '/etranger',
            templateUrl: 'views/fiches-situation/protection-sociale/etranger.html',
            controller: 'mainController'
        })

        .state('ame', {
            url: '/ame',
            templateUrl: 'views/fiches-situation/protection-sociale/ame.html',
            controller: 'mainController'
        })

        .state('expulsion', {
            url: '/expulsion',
            templateUrl: 'views/fiches-situation/logement/expulsion.html',
            controller: 'mainController'
        })

        .state('sdf', {
            url: '/sdf',
            templateUrl: 'views/fiches-situation/logement/sdf.html',
            controller: 'mainController' 
        })

        .state('demission', {
            url: '/demission',
            templateUrl: 'views/fiches-situation/emploi/demission.html',
            controller: 'mainController'   
        })

        .state('viensdedemissionner', {
            url: '/viens-de-demissionner',
            templateUrl: 'views/fiches-situation/emploi/viens-de-demissionner.html',
            controller: 'mainController' 
        })

        .state('licencie', {
            url: '/licencie',
            templateUrl: 'views/fiches-situation/emploi/licencie.html',
            controller: 'mainController' 
        })

        .state('malade-licencie', {
            url: '/malade-licencie',
            templateUrl: 'views/fiches-situation/emploi/malade-licencie.html',
            controller: 'mainController' 
        })

        .state('pas-de-travail', {
            url: '/pas-de-travail',
            templateUrl: 'views/fiches-situation/emploi/pas-de-travail.html',
            controller: 'mainController' 
        })

        .state('touche-rien', {
            url: '/touche-rien',
            templateUrl: 'views/fiches-situation/ressources/touche-rien.html',
            controller: 'mainController' 
        })

        .state('allocations', {
            url: '/allocations',
            templateUrl: 'views/fiches-situation/ressources/allocations.html',
            controller: 'mainController' 
        })

        .state('rsa', {
            url: '/rsa',
            templateUrl: 'views/fiches-situation/ressources/rsa.html',
            controller: 'mainController' 
        })

        .state('AAH', {
            url: '/AAH',
            templateUrl: 'views/fiches-situation/ressources/AAH.html',
            controller: 'mainController' 
        })

        .state('fin-de-droits', {
            url: '/fin-de-droits',
            templateUrl: 'views/fiches-situation/ressources/fin-de-droits.html',
            controller: 'mainController' 
        })

        .state('hospitalisation-patient', {
            url: '/hospitalisation-patient',
            templateUrl: 'views/fiches-situation/situations-particulieres/hospitalisation-patient.html',
            controller: 'mainController' 
        })

         .state('enfant-malade', {
            url: '/enfant-malade',
            templateUrl: 'views/fiches-situation/situations-particulieres/enfant-malade.html',
            controller: 'mainController' 
        })

        .state('etudiant', {
            url: '/etudiant',
            templateUrl: 'views/fiches-situation/situations-particulieres/etudiant.html',
            controller: 'mainController' 
        })

        .state('enfant-retire', {
            url: '/enfant-retire',
            templateUrl: 'views/fiches-situation/situations-particulieres/enfant-retire.html',
            controller: 'mainController' 
        })

        .state('personne-vulnerable', {
            url: '/personne-vulnerable',
            templateUrl: 'views/fiches-situation/situations-particulieres/personne-vulnerable.html',
            controller: 'mainController' 
        })

        //Fiches techniques
        .state('droits-ss', {
            url: '/droits-ss',
            templateUrl: 'views/fiches-techniques/droits-ss.html',
            controller: 'mainController' 
        })

        .state('couverture-sociale', {
            url: '/couverture-sociale',
            templateUrl: 'views/fiches-techniques/couverture-sociale.html',
            controller: 'mainController' 
        })

        .state('CS-chomeur', {
            url: '/couverture-sociale-des-chomeurs',
            templateUrl: 'views/fiches-techniques/CS-chomeur.html',
            controller: 'mainController' 
        })

        .state('RSA', {
            url: '/RSA',
            templateUrl: 'views/fiches-techniques/RSA.html',
            controller: 'mainController' 
        })

        .state('CMU', {
            url: '/CMU',
            templateUrl: 'views/fiches-techniques/CMU.html',
            controller: 'mainController' 
        })

        .state('ticket-moderateur', {
            url: '/ticket-moderateur',
            templateUrl: 'views/fiches-techniques/ticket-moderateur.html',
            controller: 'mainController' 
        })

        .state('complementaires-sante', {
            url: '/complementaires-sante',
            templateUrl: 'views/fiches-techniques/complementaires-sante.html',
            controller: 'mainController' 
        })

        .state('protection-etrangers', {
            url: '/protection-etrangers',
            templateUrl: 'views/fiches-techniques/protection-etrangers.html',
            controller: 'mainController' 
        })

        .state('etrangers-sejour-temporaire', {
            url: '/etrangers-sejour-temporaire',
            templateUrl: 'views/fiches-techniques/etrangers-sejour-temporaire.html',
            controller: 'mainController' 
        })

        .state('arret-maladie', {
            url: '/arret-maladie',
            templateUrl: 'views/fiches-techniques/arret-maladie.html',
            controller: 'mainController' 
        })

        .state('surendettement', {
            url: '/surendettement',
            templateUrl: 'views/fiches-techniques/surendettement.html',
            controller: 'mainController' 
        })

        .state('assurance-invalidite', {
            url: '/assurance-invalidite',
            templateUrl: 'views/fiches-techniques/assurance-invalidite.html',
            controller: 'mainController' 
        })

        .state('assurance-maternite', {
            url: '/assurance-maternite',
            templateUrl: 'views/fiches-techniques/assurance-maternite.html',
            controller: 'mainController' 
        })

        .state('accident-travail', {
            url: '/accident-travail',
            templateUrl: 'views/fiches-techniques/accident-travail.html',
            controller: 'mainController' 
        })

        .state('maladies-professionnelles', {
            url: '/maladies-professionnelles',
            templateUrl: 'views/fiches-techniques/maladies-professionnelles.html',
            controller: 'mainController' 
        })

        .state('inaptitude', {
            url: '/inaptitude',
            templateUrl: 'views/fiches-techniques/inaptitude.html',
            controller: 'mainController' 
        })

        .state('etudiants-ft', {
            url: '/etudiants-ft',
            templateUrl: 'views/fiches-techniques/etudiants-ft.html',
            controller: 'mainController' 
        })

        .state('detenus', {
            url: '/detenus',
            templateUrl: 'views/fiches-techniques/detenus.html',
            controller: 'mainController' 
        })

        .state('handicap', {
            url: '/handicap',
            templateUrl: 'views/fiches-techniques/handicap.html',
            controller: 'mainController' 
        })

        .state('aide-logement', {
            url: '/aide-logement',
            templateUrl: 'views/fiches-techniques/aide-logement.html',
            controller: 'mainController' 
        })

        .state('mediation-familiale', {
            url: '/mediation-familiale',
            templateUrl: 'views/fiches-techniques/mediation-familiale.html',
            controller: 'mainController' 
        })

        .state('aides-jeunes', {
            url: '/aides-jeunes',
            templateUrl: 'views/fiches-techniques/aides-jeunes.html',
            controller: 'mainController' 
        })

        .state('demissions-legitimes', {
            url: '/demissions-legitimes',
            templateUrl: 'views/fiches-techniques/demissions-legitimes.html',
            controller: 'mainController' 
        })

        .state('conges-particuliers', {
            url: '/conges-particuliers',
            templateUrl: 'views/fiches-techniques/conges-particuliers.html',
            controller: 'mainController' 
        })

        .state('assurance-chomage', {
            url: '/assurance-chomage',
            templateUrl: 'views/fiches-techniques/assurance-chomage.html',
            controller: 'mainController' 
        })

        .state('aide-juridictionnelle', {
            url: '/aide-juridictionnelle',
            templateUrl: 'views/fiches-techniques/aide-juridictionnelle.html',
            controller: 'mainController' 
        })

        .state('licenciement-personnel', {
            url: '/licenciement-personnel',
            templateUrl: 'views/fiches-techniques/licenciement-personnel.html',
            controller: 'mainController' 
        })


        .state('procedure-licenciement', {
            url: '/procedure-licenciement',
            templateUrl: 'views/fiches-techniques/procedure-licenciement.html',
            controller: 'mainController' 
        })

        .state('conseil-prudhommes', {
            url: '/conseil-prudhommes',
            templateUrl: 'views/fiches-techniques/conseil-prudhommes.html',
            controller: 'mainController' 
        })

        .state('expulsion-prevention-procedure', {
            url: '/expulsion-prevention-procedure',
            templateUrl: 'views/fiches-techniques/expulsion-prevention-procedure.html',
            controller: 'mainController' 
        })

        .state('huissiers', {
            url: '/huissiers',
            templateUrl: 'views/fiches-techniques/huissiers.html',
            controller: 'mainController' 
        })

        .state('apa', {
            url: '/apa',
            templateUrl: 'views/fiches-techniques/apa.html',
            controller: 'mainController' 
        })

        .state('longue-maladie', {
            url: '/longue-maladie',
            templateUrl: 'views/fiches-techniques/longue-maladie.html',
            controller: 'mainController' 
        })

        .state('docs-hospitalisation', {
            url: '/docs-hospitalisation',
            templateUrl: 'views/fiches-techniques/docs-hospitalisation.html',
            controller: 'mainController' 
        })

        .state('protection-mineurs', {
            url: '/protection-mineurs',
            templateUrl: 'views/fiches-techniques/protection-mineurs.html',
            controller: 'mainController' 
        })

        .state('protection-majeurs', {
            url: '/protection-majeurs',
            templateUrl: 'views/fiches-techniques/protection-majeurs.html',
            controller: 'mainController' 
        })

        .state('104', {
            url: '/bilan',
            templateUrl: 'views/fiches-type/104.html',
            controller: 'mainController' 
        })

        .state('105', {
            url: '/ASSS',
            templateUrl: 'views/fiches-type/105.html',
            controller: 'mainController' 
        })

        .state('106', {
            url: '/accompagnement-social',
            templateUrl: 'views/fiches-type/106.html',
            controller: 'mainController' 
        })

        .state('107', {
            url: '/PASS',
            templateUrl: 'views/fiches-type/107.html',
            controller: 'mainController' 
        })

        .state('108', {
            url: '/CPAM',
            templateUrl: 'views/fiches-type/108.html',
            controller: 'mainController' 
        })

        .state('109', {
            url: '/expulsion',
            templateUrl: 'views/fiches-type/109.html',
            controller: 'mainController' 
        })

        .state('110', {
            url: '/pole-emploi',
            templateUrl: 'views/fiches-type/110.html',
            controller: 'mainController' 
        })

        .state('111', {
            url: '/medecin-travail',
            templateUrl: 'views/fiches-type/111.html',
            controller: 'mainController' 
        })

        .state('112', {
            url: '/Guichet-prefecture',
            templateUrl: 'views/fiches-type/112.html',
            controller: 'mainController' 
        })

        .state('113', {
            url: '/medecin-ars',
            templateUrl: 'views/fiches-type/113.html',
            controller: 'mainController' 
        })

        .state('114', {
            url: '/prefecture',
            templateUrl: 'views/fiches-type/114.html',
            controller: 'mainController' 
        })

        .state('115', {
            url: '/refus',
            templateUrl: 'views/fiches-type/115.html',
            controller: 'mainController' 
        })

        .state('116', {
            url: '/contentieux',
            templateUrl: 'views/fiches-type/116.html',
            controller: 'mainController' 
        })

        .state('pieces-a-joindre', {
            url: '/pieces-a-joindre',
            templateUrl: 'views/fiches-type/pieces-a-joindre.html',
            controller: 'mainController' 
        })

        .state('carnet-adresses', {
            url: '/carnet-adresses',
            templateUrl: 'views/adresses/carnet-adresses.html',
            controller: 'mainController' 
        })

        .state('lexique', {
            url: '/lexique',
            templateUrl: 'views/lexique/lexique.html',
            controller: 'mainController' 
        })


    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/');

});

