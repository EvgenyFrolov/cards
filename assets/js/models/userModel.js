define([
    
    'underscore',
    'backbone'

], function(_, Backbone) {

    var UserModel = Backbone.Model.extend({

        defaults: {
            email: "default@email.com",
            name: "Default name"

        },

        schemaName: "Users",

        initialize: function() {

        }
        
    });

    return UserModel;

});