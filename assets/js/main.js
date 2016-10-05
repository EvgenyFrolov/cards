// Author: John Frolov <johnwfrolov@gmail.com>
// Filename: main.js

require.config({

	shim: {
		'jquery': {
			exports: '$'	
		},

		'underscore': {
			exports: '_'
		},

		'bootstrap': {
			deps : ['jquery'],
			exports: 'Bootstrap'
		
        },

    	'bootstrapcombobox': {
    		deps : ['jquery'],
    		exports: '$.fn.combobox'
    	},

    	'bootstrapselect': {
    		deps : ['jquery'],
    		exports: '$.fn.select'
    	},

    	'DataTables': {
    		deps : ['jquery'],
    	},

    	'backbone': {
    		deps: ['underscore', 'jquery'],
            exports: 'Backbone',
    	},

    	'backendless': {
    		exports: 'Backendless',
	    },

	    'backboneBackendless': {
	      	deps: ['backendless', 'backbone'],
	      	exports : 'BackboneBackendless'
	     },
	},

	paths: {

    	jquery: 				'lib/jquery/jquery-3.1.1.min',
    	bootstrap: 				'lib/bootstrap/bootstrap.min',
    	bootstrapcombobox: 		'lib/bootstrap/bootstrap-combobox',
    	bootstrapselect: 		'lib/bootstrap/bootstrap-select.min',
    	datatables: 			'lib/jquery/jquery.dataTables.min',
    	underscore:  			'lib/underscore/underscore-1.8.3.min',
    	backbone: 				'lib/backbone/backbone-min',
    	backendless:        	'lib/backendless/backendless.min',
    	backboneBackendless:	'lib/backendless/backendless-backbone-min',

  	}

});

require( [
  		'cards',
	],

 	function(App){
		App.initialize();
});