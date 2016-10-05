define([
    
    'underscore',
    'backbone'

], function(_, Backbone) {


    var CardsAppModel = Backbone.Model.extend({

        defaults: {
            loggedUser: ""
        }

    });

    return CardsAppModel;

});
