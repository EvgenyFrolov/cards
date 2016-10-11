define([
    'jquery',
    'underscore',
    'backbone',
    'backendless',
    'router'

], function ( $, _, Backbone, Backendless, Router) {

    var initialize = function () {

    //Backendless: defaults
        var Defaults = {
            APPLICATION_ID: '1B8C4310-53E6-0409-FF76-74B60348EA00',
            SECRET_KEY: '2444C798-2894-0B46-FFC5-CFE0D5D57500',
            VERSION: 'v1'
        };

        if (!Defaults.APPLICATION_ID || !Defaults.SECRET_KEY || !Defaults.VERSION) {
            alert("Missing application ID and secret key arguments. Login to Backendless Console, select your app and get the ID and key from the Manage > App Settings screen. Copy/paste the values into the Backendless.initApp call located in app.js");
        }

        Backendless.initApp(Defaults.APPLICATION_ID, Defaults.SECRET_KEY, Defaults.VERSION);

        Router.initialize();
    };

    return { 
        initialize: initialize
    };
});
